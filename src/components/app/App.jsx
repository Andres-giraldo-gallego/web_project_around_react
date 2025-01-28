import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { useState, useEffect } from "react";
import Main from "../Main/Main.jsx";
import apiInstance from "../../utils/api.js";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import RemoveCard from "../RemoveCard/RemoveCard.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const [popup, setPopup] = useState(null);
  const [CurrentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const fechUser = async () => {
    const responseUser = await apiInstance.getUserInfo();
    setCurrentUser(responseUser);
  };

  const handleEditAvatar = (avatar) => {
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
        setPopup(null);
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
  const handleSudmidButton = (selectCard) => {
    apiInstance.deleteCard(selectCard).then(() => {
      setCards((state) => state.filter((item) => item._id !== selectCard));
      setPopup(null);
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
              cards={cards}
              setCards={setCards}
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
