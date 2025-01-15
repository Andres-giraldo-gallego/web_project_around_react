import botebasura from "../../images/Trash.png";
import megusta from "../../images/Group.png";

const NewCard = (props) => {
  const { link, name, handleCloseImage, handleOpenImage } = props;
  return (
    <div className="elements_card">
      <div className="elements_img-container">
        <img
          src={link}
          alt={name}
          className="elements_img"
          onClick={handleOpenImage}
        />
      </div>
      <button
        className="elements__trash"
        aria-label="Borrar"
        onClick={handleCloseImage}
      >
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
export default NewCard;
