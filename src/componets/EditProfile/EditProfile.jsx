const EditProfile = () => {
  return (
    <>
      <form className="popup__form" id="popup-form">
        <input
          name="name"
          className="popup__name popup__input"
          placeholder="Nombre"
          id="popup-name"
          required
          minLength="2"
          maxLength="40"
        />

        <span id="name-error" className="popup__red"></span>

        <input
          name="about"
          className="popup__about popup__input"
          placeholder="Acerca de mí"
          id="popup-about"
          required
          minLength="2"
          maxLength="200"
        />

        <span id="about-error" className="popup__red"></span>

        <button
          className="popup__Submit-Button button-loading"
          id="popup-Submit-Button"
        >
          Guardar
        </button>
      </form>
    </>
  );
};
export default EditProfile;
