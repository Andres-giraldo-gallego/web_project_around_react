import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body>
        <div class="page">
          <header class="header">
            <img
              src="<%= require('./images/Vector.svg')%>"
              alt="logo"
              class="header__logo"
            />
          </header>
          <section class="profile">
            <div class="profile__container">
              <img
                src="<%= require('./images/Vector (1).svg')%>"
                alt="lapiz"
                class="profile__avatar-edit"
              />
              <img
                src="<%= require('./images/Avatar.png')%>"
                alt="Avatar"
                class="profile__avatar"
              />
            </div>
            <div class="profile__content">
              <div class="profile__info">
                <p class="profile__name">Andres Giraldo.</p>
                <p class="profile__hobbie">Explorador</p>
              </div>

              <button class="profile__edit-button" aria-label="Editar perfil">
                <img
                  src="<%= require('./images/Edit Button.png')%>"
                  alt="Botón para editar perfil"
                  class="profile__edit-button-img"
                />
              </button>
            </div>
            <button
              class="profile__add-button button-loading"
              aria-label="Agregar nueva imagen"
            >
              <img
                src="<%= require('./images/Add Button.png')%>"
                alt="Botón para agregar nueva imagen"
                class="profile__add-button-img"
              />
            </button>
          </section>
          <section class="elements">
            <div class="elements__container">
              <template id="elements_template">
                <div class="elements_card">
                  <div class="elements_img-container">
                    <img alt="foto de referencia" class="elements_img" />
                  </div>
                  <button class="elements__trash" aria-label="Borrar">
                    <img
                      src="<%= require('./images/Trash.png')%>"
                      alt="bote de basura"
                      class="elements__trash-img"
                    />
                  </button>

                  <div class="elements_info">
                    <p class="elements_text"></p>
                    <button class="elements_link" aria-label="Me gusta">
                      <img
                        src="<%= require('./images/Group.png')%>"
                        alt="corazon me gusta"
                        class="elements_link-img"
                      />
                    </button>
                  </div>
                </div>
              </template>
            </div>
          </section>

          <dialog class="dialog" id="dialog">
            <button class="dialog__button" id="dialog-x" type="button">
              <img
                src="<%= require('./images/Close Icon.svg')%>"
                class="dialog__form-img"
                alt="boton de cierre"
              />
            </button>

            <img class="dialog__img" id="dialog-img" />
            <div class="dialog__text" id="dialog-text"></div>
          </dialog>

          <footer class="footer">© 2024 Andres Giraldo Gallego.</footer>

          <div class="popup" id="popup-profile">
            <div class="popup__container" id="popup-container">
              <form class="popup__form" id="popup-form">
                <button
                  class="popup__form-x popup__close-btn"
                  id="popup-form-x"
                  type="button"
                >
                  <img
                    src="<%= require('./images/Close Icon.svg')%>"
                    class="popup__form-img"
                    alt="boton de cierre"
                  />
                </button>
                <h2 class="popup__text">Editar perfil</h2>
                <input
                  name="name"
                  class="popup__name popup__input"
                  placeholder="Nombre"
                  id="popup-name"
                  required
                  minlength="2"
                  maxlength="40"
                />

                <span id="name-error" class="popup__red"></span>

                <input
                  name="about"
                  class="popup__about popup__input"
                  placeholder="Acerca de mí"
                  id="popup-about"
                  required
                  minlength="2"
                  maxlength="200"
                />

                <span id="about-error" class="popup__red"></span>

                <button
                  class="popup__Submit-Button button-loading"
                  id="popup-Submit-Button"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>

          <div class="popup" id="popup-card">
            <div class="popup__container" id="popup-card-container">
              <form class="popup__form" id="popup-card-form">
                <button
                  class="popup__form-x popup__close-btn"
                  id="popup-card-form-x"
                  type="button"
                >
                  <img
                    id="popup-x"
                    src="<%= require('./images/Close Icon.svg')%>"
                    class="popup__form-img"
                    alt="boton de cierre"
                  />
                </button>
                <h2 class="popup__text">Nuevo lugar</h2>
                <input
                  name="title"
                  class="popup__name popup__input"
                  placeholder="Título"
                  id="popup-card-name"
                  required
                  minlength="2"
                  maxlength="30"
                />

                <span id="title-error" class="popup__red"></span>

                <input
                  name="link"
                  class="popup__about popup__input"
                  placeholder="Enlace a la imagen"
                  id="popup-link"
                  required
                  type="url"
                />
                <span id="link-error" class="popup__red"></span>

                <button
                  class="popup__Submit-Button button-loading"
                  id="popup-card-Submit-Button"
                >
                  Crear
                </button>
              </form>
            </div>
          </div>

          <div class="popup" id="popup-avatar">
            <div class="popup__container" id="popup-container">
              <form class="popup__form" id="popup-form">
                <button
                  class="popup__form-x popup__close-btn"
                  id="popup-form-x"
                  type="button"
                >
                  <img
                    src="<%= require('./images/Close Icon.svg')%>"
                    class="popup__form-img"
                    alt="boton de cierre"
                  />
                </button>
                <h2 class="popup__text">Cambiar foto de perfil</h2>
                <input
                  name="avatar"
                  class="popup__name popup__input"
                  placeholder="https://somewebsite.com/someimage.jpg"
                  id="popup-avatar"
                  required
                  minlength="2"
                />

                <span id="avatar-error" class="popup__red"></span>

                <button
                  class="popup__Submit-Button button-loading"
                  id="popup-Submit-Button"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>

          <div class="popup" id="popup-delete">
            <div class="popup__container" id="popup-container">
              <form class="popup__form" id="popup-form">
                <button
                  class="popup__form-x popup__close-btn"
                  id="popup-form-x"
                  type="button"
                >
                  <img
                    src="<%= require('./images/Close Icon.svg')%>"
                    class="popup__form-img"
                    alt="boton de cierre"
                  />
                </button>
                <h2 class="popup__text">¿Estás seguro/a?</h2>
                <button
                  class="popup__Submit-Button button-loading"
                  id="popup-delete-button"
                >
                  Sí
                </button>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
