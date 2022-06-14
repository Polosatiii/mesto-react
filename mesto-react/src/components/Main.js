import React from "react";
import Card from './Card';

import api from '../utils/api';

class Main extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        userName: 'Неизвестный',
        userDescription: 'Потеряно соединение с сервером',
        userAvatar: '',
        cards: [],
      };
    }
    componentDidMount() {
        api.getUserInfo()
          .then(res =>
            this.setState({
              userName: res.name,
              userDescription: res.about,
              userAvatar: res.avatar,
            })
          );
    
        api.getInitialCards()
          .then(res => 
            this.setState({
              cards: res
            })
          );
      }

    
render() {
    return(
        <main className = "content">

        <section className = "user">
            <div className = "user__image-container">
            <img onClick={this.props.onEditAvatar} src={this.state.userAvatar} alt = "Фото" className = "user__image"/>
            </div>
            <div className = "user__description">
                <h1 className ="user__name">{this.state.userName}</h1>
                <button onClick={this.props.onEditProfile} type = "button" className = "user__add-info"/>
                <h2 className = "user__info">{this.state.userDescription}</h2>
            </div>
            <button  onClick={this.props.onAddPlace} type = "button" className = "user__add-photo"/>
            </section>
            <section className = "user-gallery">
                <ul className   = "user-gallery__items">
                {this.state.cards.map(card =>
              <Card key={card._id} onCardClick={this.props.onCardClick} card={card} />
            )}
                </ul>
            </section>
        </main>
    );
}
}


export default Main;