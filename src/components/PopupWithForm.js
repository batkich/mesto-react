function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" className={`popup__close-icon popup__close-icon_type_${props.name}`} onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
      </div>
    </div>
  )
}

export default PopupWithForm
