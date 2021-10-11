function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button type="button" className="element__delete-button">
      </button>
      <img className="element__picture" src={`${props.card.link}`} alt={`${props.card.name}`} onClick={handleClick} />
      <div className="element__footer">
        <h2 className="element__title">
          {props.card.name}
        </h2>
        <div className="element__button-box">
          <button type="button" className="element__button">
          </button>
          <span className="element__button-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card
