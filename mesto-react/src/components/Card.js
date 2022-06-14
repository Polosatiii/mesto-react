import React from 'react';

function Card(props) {
    function handleClick()  {
        props.onCardClick(props.card);
      };

return (
    <li className="user-gallery__item">
    <button onClick={props.onClose} type="button" className="user-gallery__delete-button" />
    <div className="user-gallery__photo-container">
    <img onClick={handleClick} src={props.card.link}  alt={props.card.name} className="user-gallery__photo" />
    </div>
    <div className="user-gallery__caption">
      <h3 className="user-gallery__photo-name">{props.card.name}</h3>
      <div className="user-gallery__like-container">
      <button type="button" className="user-gallery__like-b"></button>
      <span className="user-gallery__like-count"> {props.card.likes.length}</span>
      </div>
    </div>
  </li>
)

    }

export default Card