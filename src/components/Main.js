import React from 'react';
import api from "../utils/Api.js";
import Vector from '../../src/images/Vector2.svg';
import Kusto from '../images/kusto.png';
import Card from '../components/Card.js'

function Main(props) {

  const [userName, setuserName] = React.useState('Жак Ив Кусто');

  const [userDescription, setuserDescription] = React.useState('Исследователь океана');

  const [userAvatar, setuserAvatar] = React.useState(Kusto);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

    api.getprofileInfo().then((res) => {
      setuserName(res.name);
      setuserDescription(res.about)
      setuserAvatar(res.avatar) // здравствуйте, хочу обратить внимание код-ревью на то, что в момент выполнения проектной работы,
      //ссылка получаемая в api ведет на несуществующую страницу в связи с чем иконка аватара на странице не отображается.

    })
    //  return () => {
    //  };
  });

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    })
    //  return () => {
    //  };
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box" onClick={props.onEditAvatar}>
          <img className="profile__avatar-cursor" src={Vector} alt="Курсор аватара профиля" />
          <img className="profile__avatar"
            src={`${userAvatar}`} alt="Аватар профиля" />
          {/*  Предложенный в описании проектной работы способ добавления аватара не использовал, так как предполагаю,что он используется в тех
             проектных работах, где картинка задана фоном через стили. В моем случае используется через атрибут src,
              поэтому сделал  так*/}
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{userName}</h1>
          <button type="button" className="profile__link-edit" onClick={props.onEditProfile}>
          </button>
          <p className="profile__info-text">{userDescription}</p>
        </div>
        <button type="button" className="profile__link-add" onClick={props.onAddPlace}>
        </button>
      </section>
      <ul className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </ul>
    </main>
  )
}

export default Main