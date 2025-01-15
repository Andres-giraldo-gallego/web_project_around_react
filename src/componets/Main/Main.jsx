import lapiz from "../../images/Vector (1).svg";
import Avatar from "../../images/Avatar.png";
import editperfil from "../../images/Edit Button.png";
import agregarimg from "../../images/Add Button.png";
import cierre from "../../images/Close Icon.svg";
import Popup from "../Popup/Popup.jsx";
import NewCard from "../Card/NewCard.jsx";
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
    popupEdit,
    popupCard,
    popupAvatar,
    popupImage,
    handleOpenEditAvatar,
    handleOpenEditCard,
    handleOpenEditPopup,
    handleCloseEditPopup,
    handleCloseEditAvatar,
    handleCloseEditCard,
    handleCloseImage,
    handleOpenImage,
  } = props;
  return (
    <div>
      <section className="profile">
        <div className="profile__container" onClick={handleOpenEditAvatar}>
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
            onClick={handleOpenEditPopup}
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
          onClick={handleOpenEditCard}
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
            <NewCard key={card._id} link={card.link} name={card.name} />
          ))}
        </div>
      </section>

      <dialog className="dialog" id="dialog">
        <button className="dialog__button" id="dialog-x" type="button">
          <img
            src={cierre}
            className="dialog__form-img"
            alt="boton de cierre"
            onClick={handleCloseImage}
          />
        </button>

        <img
          className="dialog__img"
          id="dialog-img"
          onClick={handleOpenImage}
        />
        <div className="dialog__text" id="dialog-text"></div>
      </dialog>

      {popupEdit && (
        <Popup title="Editar perfil">
          <form className="popup__form" id="popup-form">
            <button
              className="popup__form-x popup__close-btn"
              id="popup-form-x"
              type="button"
              onClick={handleCloseEditPopup}
            >
              <img
                src={cierre}
                className="popup__form-img"
                alt="boton de cierre"
              />
            </button>

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
        </Popup>
      )}

      {popupCard && (
        <Popup title="Nuevo lugar">
          <form className="popup__form" id="popup-card-form">
            <button
              className="popup__form-x popup__close-btn"
              id="popup-card-form-x"
              type="button"
              onClick={handleCloseEditCard}
            >
              <img
                id="popup-x"
                src={cierre}
                className="popup__form-img"
                alt="boton de cierre"
              />
            </button>

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
        </Popup>
      )}
      {popupAvatar && (
        <Popup title="Cambiar foto de perfil">
          <form className="popup__form" id="popup-form">
            <button
              className="popup__form-x popup__close-btn"
              id="popup-form-x"
              type="button"
              onClick={handleCloseEditAvatar}
            >
              <img
                src={cierre}
                className="popup__form-img"
                alt="boton de cierre"
              />
            </button>

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
        </Popup>
      )}
      {popupImage && (
        <Popup title="¿Estás seguro/a?">
          <form className="popup__form" id="popup-form">
            <button
              className="popup__form-x popup__close-btn"
              id="popup-form-x"
              type="button"
            >
              <img
                src={cierre}
                className="popup__form-img"
                alt="boton de cierre"
              />
            </button>

            <button
              className="popup__Submit-Button button-loading"
              id="popup-delete-button"
            >
              Sí
            </button>
          </form>
        </Popup>
      )}
    </div>
  );
};

export default Main;
