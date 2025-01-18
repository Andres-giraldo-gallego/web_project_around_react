import lapiz from "../../images/Vector (1).svg";
import Avatar from "../../images/Avatar.png";
import editperfil from "../../images/Edit Button.png";
import agregarimg from "../../images/Add Button.png";
import Popup from "../Popup/Popup.jsx";
import Card from "../Card/Card.jsx";
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];
const Main = (props) => {
  const {
    handleClosePopup,
    newCardPopup,
    handleOpenPopup,
    popup,
    newEditPopup,
    newAvatarPopup,
    imagesPopup,
  } = props;
  return (
    <div>
      <section className="profile">
        <div
          className="profile__container"
          onClick={() => handleOpenPopup(newAvatarPopup)}
        >
          <img src={lapiz} alt="lapiz" className="profile__avatar-edit" />
          <img src={Avatar} alt="Avatar" className="profile__avatar" />
        </div>
        <div className="profile__content">
          <div className="profile__info">
            <p className="profile__name">Andres Giraldo.</p>
            <p className="profile__hobbie">Explorador</p>
          </div>

          <button
            className="profile__edit-button"
            aria-label="Editar perfil"
            onClick={() => handleOpenPopup(newEditPopup)}
          >
            <img
              src={editperfil}
              alt="Botón para editar perfil"
              className="profile__edit-button-img"
            />
          </button>
        </div>
        <button
          className="profile__add-button button-loading"
          aria-label="Agregar nueva imagen"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            src={agregarimg}
            alt="Botón para agregar nueva imagen"
            className="profile__add-button-img"
          />
        </button>
      </section>
      <section className="elements">
        <div className="elements__container">
          {cards.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              imagesPopup={imagesPopup}
              handleOpenImage={handleOpenPopup}
            />
          ))}
        </div>
      </section>

      {popup && (
        <Popup title={popup.title} onClick={handleClosePopup}>
          {popup.children}
        </Popup>
      )}
    </div>
  );
};

export default Main;
