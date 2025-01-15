import Header from "./componets/Header/Header.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import { useState } from "react";
import Main from "./componets/Main/Main.jsx";

function App() {
  const [popupEdit, setPopupEdit] = useState(false);
  const [popupCard, setPopupCard] = useState(false);
  const [popupAvatar, setPopupAvatar] = useState(false);
  const [popupImage, setPopupImage] = useState(false);

  const handleOpenEditPopup = () => {
    setPopupEdit(true);
  };
  const handleOpenEditCard = () => {
    setPopupCard(true);
  };
  const handleOpenEditAvatar = () => {
    setPopupAvatar(true);
  };
  const handleOpenImage = () => {
    setPopupImage(true);
  };

  const handleCloseEditPopup = () => {
    setPopupEdit(false);
  };
  const handleCloseEditCard = () => {
    setPopupCard(false);
  };
  const handleCloseEditAvatar = () => {
    setPopupAvatar(false);
  };
  const handleCloseImage = () => {
    setPopupImage(false);
  };
  return (
    <>
      <div>
        <div className="page">
          <Header />
          <Main
            popupEdit={popupEdit}
            popupCard={popupCard}
            popupAvatar={popupAvatar}
            popupImage={popupImage}
            handleOpenEditPopup={handleOpenEditPopup}
            handleOpenEditCard={handleOpenEditCard}
            handleOpenEditAvatar={handleOpenEditAvatar}
            handleCloseEditPopup={handleCloseEditPopup}
            handleCloseEditCard={handleCloseEditCard}
            handleCloseEditAvatar={handleCloseEditAvatar}
            handleCloseImage={handleCloseImage}
            handleOpenImage={handleOpenImage}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
