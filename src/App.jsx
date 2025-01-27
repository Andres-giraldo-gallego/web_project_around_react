import Header from "./componets/Header/Header.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import { useState, useEffect } from "react";
import Main from "./componets/Main/Main.jsx";
import apiInstance from "./utils/api.js";
import EditProfile from "./componets/EditProfile/EditProfile.jsx";
import EditAvatar from "./componets/EditAvatar/EditAvatar.jsx";
import ImagePopup from "./componets/ImagePopup/ImagePopup.jsx";
import RemoveCard from "./componets/RemoveCard/RemoveCard.jsx";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {
  const [popup, setPopup] = useState(null);
  const [CurrentUser, setCurrentUser] = useState({});

  const fechUser = async () => {
    const responseUser = await apiInstance.getUserInfo();
    setCurrentUser(responseUser);
  };

  const handleEditAvatar = (avatar) => {
    console.log(avatar);
    apiInstance.editAvatarUser(avatar).then((response) => {
      setCurrentUser(response);
      setPopup(null);
    });
  };

  useEffect(() => {
    fechUser();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await apiInstance.editUserInfo(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  const newAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar handleEditAvatar={handleEditAvatar} />,
  };

  const newEditPopup = {
    title: "Editar perfil",
    children: <EditProfile handleUpdateUser={handleUpdateUser} />,
  };
  const imagesPopup = (selectCard) => ({
    children: <ImagePopup selectCard={selectCard} />,
  });

  const DeleteCard = (selectCard) => ({
    children: (
      <RemoveCard
        selectCard={selectCard}
        handleSudmidButton={handleSudmidButton}
      />
    ),
  });
  const handleSudmidButton = (selectedCard) => {
    console.log(selectedCard);
    apiInstance.deleteCard(selectedCard).then((response) => {
      setCards((state) => state.filter((item) => item._id !== response._id));
    });
  };
  const handleOpenPopup = (popup) => {
    setPopup(popup);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <>
      <CurrentUserContext.Provider value={CurrentUser}>
        <div>
          <div className="page">
            <Header />
            <Main
              handleOpenPopup={handleOpenPopup}
              handleClosePopup={handleClosePopup}
              popup={popup}
              newAvatarPopup={newAvatarPopup}
              newEditPopup={newEditPopup}
              imagesPopup={imagesPopup}
              DeleteCard={DeleteCard}
              setPopup={setPopup}
            />
            <Footer />
          </div>
        </div>
      </CurrentUserContext.Provider>
      ;
    </>
  );
}

export default App;
