import React, { Component } from 'react';
import './UserFormStyle.css';
import { ButtonContainer } from './Button.jsx';

export default class PageNotFound extends Component {
    render () {
        return (
            <div className='container'>
                <ButtonContainer className='container__btn'>Вернуться на главную</ButtonContainer>
            </div>
        )
    }
}
