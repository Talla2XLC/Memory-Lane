import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonContainer } from './Button.jsx';

export default class PageNotFound extends Component {
    render () {
        return (
            <PageNotFoundWrapper>
                <div className='container-not-found'>
                    <ButtonContainer className='not-found__btn'>Вернуться на главную</ButtonContainer>
                </div>
            </PageNotFoundWrapper>
        )
    }
}

const PageNotFoundWrapper = styled.div`

.container-not-found {
    background: url(svg/404_page_not_found.svg) no-repeat
    background-position: center top
    height: 897.04px
    margin-top: 32.96px
}

.not-found__btn {
    margin-top: 619.04px
}

`;