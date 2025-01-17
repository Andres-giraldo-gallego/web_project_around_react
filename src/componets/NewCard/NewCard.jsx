const NewCard = () => {
  return (
    <>
      <form className="popup__form" id="popup-card-form">
        <input
          name="title"
          className="popup__name popup__input"
          placeholder="Título"
          id="popup-card-name"
          required
          minLength="2"
          maxLength="30"
        />

        <span id="title-error" className="popup__red"></span>

        <input
          name="link"
          className="popup__about popup__input"
          placeholder="Enlace a la imagen"
          id="popup-link"
          required
          type="url"
        />
        <span id="link-error" className="popup__red"></span>

        <button
          className="popup__Submit-Button button-loading"
          id="popup-card-Submit-Button"
        >
          Crear
        </button>
      </form>
    </>
  );
};
export default NewCard;
