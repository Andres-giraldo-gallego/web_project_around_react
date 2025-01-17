import botebasura from "../../images/Trash.png";
import megusta from "../../images/Group.png";

const Card = (props) => {
  const { link, name, handleOpenImage, imagesPopup, setSelectCard } = props;

  const handleCLick = () => {
    handleOpenImage(imagesPopup);
    setSelectCard({ link, name });
  };

  return (
    <div className="elements_card">
      <div className="elements_img-container">
        <img
          src={link}
          alt={name}
          className="elements_img"
          onClick={handleCLick}
        />
      </div>
      <button className="elements__trash" aria-label="Borrar">
        <img
          src={botebasura}
          alt="bote de basura"
          className="elements__trash-img"
        />
      </button>

      <div className="elements_info">
        <p className="elements_text">{name}</p>
        <button className="elements_link" aria-label="Me gusta">
          <img
            src={megusta}
            alt="corazon me gusta"
            className="elements_link-img"
          />
        </button>
      </div>
    </div>
  );
};
export default Card;