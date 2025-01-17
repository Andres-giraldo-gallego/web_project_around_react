const EditAvatar = () => {
  return (
    <form className="popup__form" id="popup-form">
      <input
        name="avatar"
        className="popup__name popup__input"
        placeholder="https://somewebsite.com/someimage.jpg"
        id="popup-avatar"
        required
        minLength="2"
      />

      <span id="avatar-error" className="popup__red"></span>

      <button
        className="popup__Submit-Button button-loading"
        id="popup-Submit-Button"
      >
        Guardar
      </button>
    </form>
  );
};
export default EditAvatar;
