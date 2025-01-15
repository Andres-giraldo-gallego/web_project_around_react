import lapiz from "../../images/Vector (1).svg";
import Avatar from "../../images/Avatar.png";
import editperfil from "../../images/Edit Button.png";
import agregarimg from "../../images/Add Button.png";
import botebasura from "../../images/Trash.png";
import megusta from "../../images/Group.png";
import cierre from "../../images/Close Icon.svg";
import Popup from "../Popup/Popup.jsx";
const Main = (props) => {
  const {
    popupEdit,
    popupCard,
    popupAvatar,
    popupImage,
    handleOpenEditAvatar,
    handleOpenEditCard,
    handleOpenEditPopup,
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
          <template id="elements_template">
            <div className="elements_card">
              <div className="elements_img-container">
                <img alt="foto de referencia" className="elements_img" />
              </div>
              <button className="elements__trash" aria-label="Borrar">
                <img
                  src={botebasura}
                  alt="bote de basura"
                  className="elements__trash-img"
                />
              </button>

              <div className="elements_info">
                <p className="elements_text"></p>
                <button className="elements_link" aria-label="Me gusta">
                  <img
                    src={megusta}
                    alt="corazon me gusta"
                    className="elements_link-img"
                  />
                </button>
              </div>
            </div>
          </template>
        </div>
      </section>

      <dialog className="dialog" id="dialog">
        <button className="dialog__button" id="dialog-x" type="button">
          <img
            src={cierre}
            className="dialog__form-img"
            alt="boton de cierre"
          />
        </button>

        <img className="dialog__img" id="dialog-img" />
        <div className="dialog__text" id="dialog-text"></div>
      </dialog>
      {popupEdit && (
        <Popup title="Editar perfil">
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
