import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/Authorization";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import Token from "../../utils/Token";
import PopupMessage from "../PopupMessage/PopupMessage";
import {
  registerSuccessful,
  registerError,
  authError,
  authSuccessful,
  profileSuccessful,
  profileError,
  messageErrorMovies,
  signOutClick,
} from "../../utils/constants";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoadingMovies, setLoadingMovies] = useState(false);
  const [loadingMoviesError, setLoadingMoviesError] = useState("");
  const [isWaitingResponse, setWaitingResponse] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [isOpenPopupError, setIsOpenPopupError] = useState(false);

  useEffect(() => {
    handleLoginToken();
  }, []);

  function handleLoginToken() {
    const token = Token.get();
    token ? handleCheckToken(token) : setLoading(false);
  }

  function loadAllMovies() {
    const token = Token.get();
    setLoadingMovies(true);
    setLoadingMoviesError("");

    Promise.all([moviesApi.getAllMovies(), mainApi.getSaveMovies(token)])
      .then(([all, saved]) => {
        setAllMovies(
          all.map((movie) => {
            let formatMovie = null;

            saved.forEach((savedMovie) => {
              if (savedMovie.movieId === movie.id) {
                formatMovie = { ...movie, _id: savedMovie._id };
              }
            });

            return formatMovie || movie;
          })
        );
      })
      .catch((err) => {
        console.log(err);
        setPopupTitle(messageErrorMovies);
        setIsOpenPopupError(true);
      })
      .finally(() => {
        setLoadingMovies(false);
      });
  }

  function loadSavedMovies() {
    const token = Token.get();
    setLoadingMovies(true);
    setLoadingMoviesError("");
    mainApi
      .getSaveMovies(token)
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
        setPopupTitle(messageErrorMovies);
        setIsOpenPopupError(true);
      })
      .finally(() => {
        setLoadingMovies(false);
      });
  }

  function handleSignOutClick() {
    setCurrentUser({});
    setLoggedIn(false);
    setAllMovies([]);
    setSavedMovies([]);
    Token.remove();
    localStorage.clear();
    history.push("/");
    setPopupTitle(signOutClick);
    setIsOpenPopupError(true);
  }

  function handleRegisterSubmit(name, email, password) {
    setWaitingResponse(true);
    auth
      .register(name, email, password)
      .then(() => {
        handleLoginSubmit(email, password);
        setPopupTitle(registerSuccessful);
        setIsOpenPopupError(true);
      })
      .catch(() => {
        setPopupTitle(registerError);
        setIsOpenPopupError(true);
        setWaitingResponse(false);
      });
  }

  function handleLoginSubmit(email, password) {
    setWaitingResponse(true);
    auth
      .login(email, password)
      .then(({ token }) => {
        setLoggedIn(true);
        handleCheckToken(token);
        Token.save(token);
        history.push("/movies");
        setPopupTitle(authSuccessful);
        setIsOpenPopupError(true);
      })
      .catch(() => {
        setPopupTitle(authError);
        setIsOpenPopupError(true);
        setWaitingResponse(false);
      });
  }

  function handleCheckToken(token) {
    auth
      .checkToken(token)
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
        if (err === 401) handleSignOutClick();
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleUpdateUser({ name, email }) {
    const token = Token.get();
    setWaitingResponse(true);
    mainApi
      .patchUser({ name, email }, token)
      .then((res) => {
        setCurrentUser(res);
        openPopup(profileSuccessful);
        setIsOpenPopupError(true);
      })
      .catch((err) => {
        console.log(err);
        openPopup(profileError);
        setIsOpenPopupError(true);
      })
      .finally(() => {
        setWaitingResponse(false);
      });
  }

  function openPopup(textError) {
    setPopupTitle(textError);
    setIsOpenPopupError(true);
  }

  function closePopup() {
    setIsOpenPopupError(false);
    setPopupTitle("");
  }

  useEffect(() => {
    if (setIsOpenPopupError) {
      function handleEsc(evt) {
        if (evt.key === "Escape") {
          closePopup();
        }
      }
      document.addEventListener("keydown", handleEsc);
      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpenPopupError]);

  return (
    <AppContext.Provider
      value={{
        loggedIn: loggedIn,
        savedMoviesContext: {
          setSavedMovies,
          savedMovies,
        },
        allMoviesContext: {
          setAllMovies,
          allMovies,
        },
      }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          {!loading && (
            <Switch>
              <Route exact path="/">
                <div className="header__container-styles">
                  <Header loggedIn={loggedIn} />
                </div>
                <Main />
                <Footer />
              </Route>
              <ProtectedRoute
                path="/movies"
                loggedIn={loggedIn}
                component={Movies}
                movies={allMovies}
                loadAllMovies={loadAllMovies}
                isLoadingMovies={isLoadingMovies}
                loadingMoviesError={loadingMoviesError}
                openPopup={openPopup}
              />

              <ProtectedRoute
                path="/saved-movies"
                loggedIn={loggedIn}
                component={SavedMovies}
                movies={savedMovies}
                loadSavedMovies={loadSavedMovies}
                isLoadingMovies={isLoadingMovies}
                loadingMoviesError={loadingMoviesError}
                openPopup={openPopup}
              />

              <ProtectedRoute
                path="/profile"
                loggedIn={loggedIn}
                component={Profile}
                onEditProfile={handleUpdateUser}
                onSignOut={handleSignOutClick}
                openPopup={openPopup}
                authError={isWaitingResponse}
              />

              <ProtectedRoute
                path="/signup"
                loggedIn={!loggedIn}
                component={Register}
                onRegister={handleRegisterSubmit}
                isWaitingResponse={isWaitingResponse}
                authError={authError}
                setWaitingResponse={setWaitingResponse}
                openPopup={openPopup}
              />

              <ProtectedRoute
                path="/signin"
                loggedIn={!loggedIn}
                component={Login}
                onLogin={handleLoginSubmit}
                isWaitingResponse={isWaitingResponse}
                authError={authError}
                setWaitingResponse={setWaitingResponse}
                openPopup={openPopup}
              />

              <Route exact path="*">
                <PageNotFound />
              </Route>
            </Switch>
          )}
          <PopupMessage
            text={popupTitle}
            isOpen={isOpenPopupError}
            onClose={closePopup}
          />
        </div>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
