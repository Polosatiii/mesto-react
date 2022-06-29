function PopupWithForm(props) {
    return (
        <section className={`popup popup_form_${props.name} ${props.isOpen ? `popup_is-open`: ""}`} onClick={props.onCloseClick}>
          <div className="popup__content">
          <button onClick={props.onClose} type="reset" className="popup__close" />
          <form className="popup__form" name={props.form} onSubmit={props.onSubmit}>
            <h2 className="popup__info">{props.title}</h2>
              {props.children}
              <button type="submit" className="popup__button-submit">{props.buttonTitle ?? 'Сохранить'}</button>
            </form>
    
          </div>
        </section>
      );
    }
    
  export default PopupWithForm;