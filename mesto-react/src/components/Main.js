import React from "react";
import Card from './Card';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

    return(
        <main className = "content">
        <section className = "user">
            <div className = "user__image-container">
            <img onClick={props.onEditAvatar} src={currentUser.avatar} alt = {currentUser.name} className = "user__image"/>
            </div>
            <div className = "user__description">
                <h1 className ="user__name">{currentUser.name}</h1>
                <button onClick={props.onEditProfile} type = "button" className = "user__add-info"/>
                <h2 className = "user__info">{currentUser.about}</h2>
            </div>
            <button  onClick={props.onAddPlace} type = "button" className = "user__add-photo"/>
            </section>
            <section className = "user-gallery">
                <ul className   = "user-gallery__items">
                {props.cards.map((card, id) => (
            <Card
              key={id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
                </ul>
            </section>
        </main>
      
        
    );
}



export default Main;