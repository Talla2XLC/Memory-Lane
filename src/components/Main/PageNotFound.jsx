import React, { Component } from 'react';
import './UserFormStyle.sass';
import { ButtonContainer } from './Button.jsx';

export default class PageNotFound extends Component {
    render () {
        return (
            <div className='container-not-found'>
                <ButtonContainer className='not-found__btn'>Вернуться на главную</ButtonContainer>
            </div>
        )
    }
}
