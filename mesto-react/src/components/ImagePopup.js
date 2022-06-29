

function ImagePopup(props) {
    return (
  <div className={'popup popup_fuul-size-photo' + (props.card ? ' popup_is-open' : '')} id="image-viewer" onClick={props.onCloseClick}>
  <div className="popup__container-photo">
    <button onClick={props.onClose} type="button" className="popup__close popup__close-full" />
    <figure className="popup__figure">
      <img className="popup__image" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} />
      <figcaption className="popup__image-caption">{props.card ? props.card.name : ''}</figcaption>
    </figure>
  </div>
</div>
    );
  }
  
  export default ImagePopup;