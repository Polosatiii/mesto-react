import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);


  const cardDeleteButtonClassName = (
    `user-gallery__delete-button ${isOwn ? 'user-gallery__delete-button_visible' : ''}`
  );

  const cardLikeButtonClassName = (
    `user-gallery__like-b ${isLiked ? 'user-gallery__like-b_active' : ''}`
  );


  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

return (
  <li className="user-gallery__item">
    <button onClick={handleDeleteClick} type="button" className={cardDeleteButtonClassName} />
    <div className="user-gallery__photo-container">
    <img onClick={handleClick} src={props.link}  alt={props.name} className="user-gallery__photo" />
    </div>
    <div className="user-gallery__caption">
      <h3 className="user-gallery__photo-name">{props.name}</h3>
      <div className="user-gallery__like-container">
      <button type="button" className={cardLikeButtonClassName}  onClick={handleLikeClick}/>
      <span className="user-gallery__like-count"> {props.likes}</span>
      </div>
    </div>
  </li>
)

    }

export default Card