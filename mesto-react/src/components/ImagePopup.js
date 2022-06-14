import React from 'react';

function ImagePopup(props) {
    return (
  <div className={'popup popup_fuul-size-photo' + (props.card.name ? ' popup_is-open' : '')} id="image-viewer">
  <div className="popup__container-photo">
    <button onClick={props.onClose} type="button" className="popup__close popup__close-full" />
    <figure className="popup__figure">
      <img src={props.card.link} className="popup__image" alt={props.card.name} />
      <figcaption className="popup__image-caption">{props.card.name}</figcaption>
    </figure>
  </div>
</div>
    );
  }
  
  export default ImagePopup;