import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
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
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} subMit="Сохранить"
      >
        <input type="text" id="popup__nickname" name="nickname" placeholder="Имя" className="popup__input" minLength="2"
          maxLength="40" required />
        <span className="popup__error popup__nickname-error"></span>
        <input type="text" id="popup__info" name="info" placeholder="О себе" className="popup__input" minLength="2"
          maxLength="200" required />
        <span className="popup__error popup__info-error"></span>
      </PopupWithForm>
      <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} subMit="Сохранить"
      >
        <input type="text" id="popup__newplace" name="newplace" placeholder="Название" className="popup__input"
          minLength="2" maxLength="30" required />
        <span className="popup__error popup__newplace-error"></span>
        <input type="url" id="popup__picture" name="picture" placeholder="Ссылка на картинку" className="popup__input"
          required />
        <span className="popup__error popup__picture-error"></span>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} subMit="Сохранить"
      >
        <input type="url" id="popup__avatar" name="avatar" placeholder="Ссылка на картинку" className="popup__input"
          required />
        <span className="popup__error popup__avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?" subMit="Да"
      >
        <button type="button" className="popup__close-icon popup__close-icon_type_card"></button>
        <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
      </PopupWithForm>
      <ImagePopup name="picture" card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

// Андрей, по поводу Prettier: установил пару спринтов назад так же по рекомендации код-ревью. Немного попользовался и понял, что стал теряться в коде
//(стало сложно читать код). Видимо нужно привыкать... Сейчас пока отключил это расширение, потому как и так иногда не совсем понимаю, что "клацаю"
// на клавиатуре :)  Сейчас использую стандартный функционал VScode (F1 -> Форматировать документ).
