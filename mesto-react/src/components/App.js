import React from 'react';


import Header from '../components/Header';
import Main from '../components/Main'
import Footer from '../components/Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);

    setSelectedCard({});
  }



  return (
    <div className='page'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" name="popup_edit-profile">
        <input type="text" autoComplete="name" autoCapitalize="words" className="popup__input" name="name" id="user-name" placeholder="Имя" minLength="2" maxLength="40" required />
        <p className="popup__error" id="user-name-error" />

        <input type="text" className="popup__input" name="about" id="profile-info" placeholder="О себе" minLength="2" maxLength="200" required />
        <p className="popup__error" id="user-info-error" />
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" name="user-place" buttonTitle="Создать">
        <input type="text" className="popup__input" name="title" id="place-name" placeholder="Название" minLength="2" maxLength="30" required />
        <p className="popup__error" id="place-name-error" />

        <input type="url" className="popup__input" name="link" id="link-url" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="link-url-error" />
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" name="avatar-url">
        <input type="url" className="popup__input" name="avatar" id="avatar-url" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="avatar-url-error" />
      </PopupWithForm>

      <PopupWithForm onClose={closeAllPopups} title="Вы уверены?" name="delete-confirm" buttonTitle="Да" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}


export default App;
