import Header from "./componets/Header/Header.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import { useState } from "react";
import Main from "./componets/Main/Main.jsx";
import NewCard from "./componets/NewCard/NewCard.jsx";
import EditProfile from "./componets/EditProfile/EditProfile.jsx";
import EditAvatar from "./componets/EditAvatar/EditAvatar.jsx";
import ImagePopup from "./componets/ImagePopup/ImagePopup.jsx";

function App() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const newAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  const newEditPopup = { title: "Editar perfil", children: <EditProfile /> };
  const imagesPopup = (selectCard) => ({
    children: <ImagePopup selectCard={selectCard} />,
  });

  const handleOpenPopup = (popup) => {
    setPopup(popup);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <>
      <div>
        <div className="page">
          <Header />
          <Main
            handleOpenPopup={handleOpenPopup}
            handleClosePopup={handleClosePopup}
            newCardPopup={newCardPopup}
            popup={popup}
            newAvatarPopup={newAvatarPopup}
            newEditPopup={newEditPopup}
            imagesPopup={imagesPopup}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
