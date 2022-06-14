function PopupWithForm(props) {
    return (
        <section className={'popup' + (props.isOpen ? ' popup_is-open' : '')} id={props.name}>
          <div className="popup__content">
    
            <button onClick={props.onClose} type="reset" className="popup__close" />
            <h2 className="popup__info">{props.title}</h2>
    
            <form className="popup__form" action="#">
    
              {props.children}
    
              <button type="submit" className="popup__button-submit">{props.buttonTitle ?? 'Сохранить'}</button>
    
            </form>
    
          </div>
        </section>
      );
    }
    
  export default PopupWithForm;