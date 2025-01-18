const RemoveCard = (props) => {
  const { selectedCard, handleSudmidButton } = props;
  return (
    <>
      <form className="popup__form" id="popup-form">
        <h2 className="popup__text">¿Estás seguro/a?</h2>
        <button
          className="popup__Submit-Button button-loading"
          id="popup-delete-button"
          onClick={() => handleSudmidButton(selectedCard)}
        >
          Sí
        </button>
      </form>
    </>
  );
};
export default RemoveCard;
