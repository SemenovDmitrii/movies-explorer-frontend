import "./PopupMessage.css";

export default function PopupMessage({ text, isOpen, onClose }) {
  return (
    <section
      className={`popup-message ${isOpen ? "popup-message_opened" : ""}`}
    >
      <div className="popup-message__container">
        <p className="popup-message__text">{text}</p>
        <button
          className="popup-message__close"
          type="button"
          onClick={onClose}
        />
      </div>
    </section>
  );
};
