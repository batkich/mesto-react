import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";



function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);

  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState('');

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <div className="root">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
      </div>
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
        children={<form className="popup__form popup__form_type_profile" name="profile-form" noValidate>
          <input type="text" id="popup__nickname" name="nickname" placeholder="Имя" className="popup__input" minLength="2"
            maxLength="40" required />
          <span className="popup__error popup__nickname-error"></span>
          <input type="text" id="popup__info" name="info" placeholder="О себе" className="popup__input" minLength="2"
            maxLength="200" required />
          <span className="popup__error popup__info-error"></span>
          <button type="submit" className="popup__button">Сохранить</button>
        </form>}
      />
      <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        children={<form className="popup__form popup__form_type_card" name="card-form" noValidate>
          <input type="text" id="popup__newplace" name="newplace" placeholder="Название" className="popup__input"
            minLength="2" maxLength="30" required />
          <span className="popup__error popup__newplace-error"></span>
          <input type="url" id="popup__picture" name="picture" placeholder="Ссылка на картинку" className="popup__input"
            required />
          <span className="popup__error popup__picture-error"></span>
          <button type="submit" className="popup__button">Сохранить</button>
        </form>}
      />
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
        children={<form className="popup__form popup__form_type_avatar" name="card-form" noValidate>
          <input type="url" id="popup__avatar" name="avatar" placeholder="Ссылка на картинку" className="popup__input"
            required />
          <span className="popup__error popup__avatar-error"></span>
          <button type="submit" className="popup__button popup__button_type_avatar">Сохранить</button>
        </form>}
      />
      <PopupWithForm name="delete" title="Вы уверены?"
        children={
          <>
            <button type="button" className="popup__close-icon popup__close-icon_type_card"></button>
            <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
            <button type="button" className="popup__button popup__button_type_delete">Да</button>
          </>
        }
      />
      <ImagePopup name="picture" card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
