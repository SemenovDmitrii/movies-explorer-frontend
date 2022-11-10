import "./FilterCheckbox.css";

const FilterCheckbox = ({ isShort, setShort }) => {
  return (
    <div className="checkbox">
      <div className="checkbox__block">
        <label className="switch link">
          <input
            type="checkbox"
            id="checkbox"
            checked={isShort}
            onChange={() => setShort(!isShort)}
          />
          <span className="slider round"></span>
        </label>
        <p className="checkbox__title">Короткометражки</p>
      </div>
    </div>
  );
};
export default FilterCheckbox;
