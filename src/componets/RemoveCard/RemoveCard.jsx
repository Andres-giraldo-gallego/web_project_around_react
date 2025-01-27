const RemoveCard = (props) => {
  const { selectedCard, handleSudmidButton } = props;
  console.log(selectedCard);
  return (
    <>
      <div className="popup__form" id="popup-form">
        <h2 className="popup__text">¿Estás seguro/a?</h2>
        <button
          className="popup__Submit-Button button-loading"
          id="popup-delete-button"
          onClick={() => handleSudmidButton(selectedCard)}
        >
          Sí
        </button>
      </div>
    </>
  );
};
export default RemoveCard;
