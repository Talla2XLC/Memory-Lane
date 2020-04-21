import React, { Component } from 'react'
import './Main.sass'
import Header from '../components/Main/Header';
import MainNav from '../components/Main/MainNav';
import Content from "../components/Main/Content";
import {BrowserRouter} from "react-router-dom";
import Router from "../Router";

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
        <BrowserRouter>
          <Header />
          <div className="central-content">
            <MainNav navItems={ navItems } />
            <Content />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
