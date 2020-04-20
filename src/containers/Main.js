import React, { Component } from 'react'
import './Main.sass'
import Header from '../components/Main/Header';
import MainNav from '../components/Main/MainNav';

export default class Main extends Component {
  state = {
    navItems: [
      { endpoint: 'persons', title: 'Персоны' },
      { endpoint: 'albums', title: 'Альбомы' },
      { endpoint: 'stories', title: 'Истории' },
      { endpoint: 'services', title: 'Сервисы' },
      { endpoint: 'learn', title: 'Обучение' },
    ]
  }

  render() {
    const { navItems } = this.state

    return (
      <div className="Main">
        <Header />
        <MainNav navItems={ navItems } />
      </div>
    )
  }
}
