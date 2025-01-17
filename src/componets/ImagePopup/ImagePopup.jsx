const ImagePopup = ({ handleOpenImage, selectCard }) => {
  console.log(selectCard);
  return (
    <div class="dialog" id="dialog">
      <img
        class="dialog__img"
        id="dialog-img"
        onClick={handleOpenImage}
        src={selectCard?.link}
      />
      <div class="dialog__text" id="dialog-text"></div>
    </div>
  );
};
export default ImagePopup;
