import React, { Component } from 'react';
// import people from './people.json';
import { ReactComponent as IconSearch } from './svg/searchIcon.svg';
import styled from 'styled-components';


export default class Search extends Component {
    state = {
      // filtered: people
    }

    // handleClick () => {

    // }

    // handleChange = (event) => {												 
    //     const {value} = event.target;                                       													 // destructuring applied instead const value = event.target.value;

    //     const filtered = people.filter((person) => {                         													 // save matches in state in people array
    //         return person.name.indexOf(value) >= 0;           													 // returns the values ​​of an array of objects by indices (.toLowerCase()?)
    // });

    //     this.setState({ filtered });
    // }

    mapPerson = (person, i) => {
      return <li className='mini-suggest__item' key={i}>{person.name}<b>{i}</b></li>;
    }

    render = () => {
      return (
        <SearchWrapper>
          <div className='search'>
            <input className='input' placeholder='Поиск' type='search'/>
            <button className='search-submit'>
              <IconSearch className='inputIcon'/>
            </button>
          </div>
          <div className='search__list'>
            <ul>
              {/* {this.state.filtered.map(this.mapPerson)} */}
            </ul>
          </div>
        </SearchWrapper>
      );
    }
}

const SearchWrapper = styled.div`
	width: 565px;

	.search {
		/* устанавливаем необходимую ширину формы в зависимости от дизайна
		** форма без проблем растягивается */

		/* кнопку отправки будем позиционировать абсолютно,
		** поэтому необходимо это свойство */
		position: relative;
	}


  .input {
		background: #FFFFFF;
    box-shadow: 0px 2px 3px #E2E2E2;
		border-radius: 24px;
		width: 387px !important;
		height: 35px;
		position: absolute;
		right: 0;
	}

	.search input,
	.search .search-submit {
		/* отключаем бордюры у инпутов */
		border: none;
		margin-right: 40px;
	}

	/* стили для поля ввода */
	.search .input {
		/* растягиваем поле ввода на всю ширину формы */
		width: 100%;

		/* за счет верхнего (8px) и нижнего (9px) внутренних отступов
		** регулируем высоту формы
		** внутренний отступ справа (37px) делаем больше левого,
		** т.к. там будет размещена кнопка отправки	*/
		padding: 8px 37px 9px 24px;

		/* чтобы ширина поля ввода (100%) включала в себя внутренние отступы */
		-moz-box-sizing: border-box;
		box-sizing: border-box;


		/* закругляем углы */
		border-radius: 24px;

		background: #fff;
		font: 16px Roboto, Tahoma, Arial, sans-serif;
		color: #555;
		outline: none;
		


		font-style: normal;
		font-weight: normal;
		line-height: 24px;
	}

	/* меняем оформление поля ввода при фокусе */
	.search .input:focus {
		box-shadow: inset 0 0 2px rgba(0,0,0,0.2), inset 0 1px 2px rgba(0,0,0,0.2);
		color: #000;
	}

	/* оформляем кнопку отправки */
	.search .search-submit {
		/* позиционируем кнопку абсолютно от правого края формы */
		position: absolute;
		top: 4px;
		right: 0;
		padding-right: 16.5px;

		width: 37px;

		/* растягиваем кнопку на всю высоту формы */
		height: 100%;

		cursor: pointer;
		background: 50% no-repeat;

		/* добавляем прозрачность кнопке отправки */
		opacity: 0.5;
	}

	/* при наведении курсора меняем прозрачность кнопки отправки */
	.search .search-submit:hover {
		opacity: 0.8;
	}

	/* данное свойство необходимо для того, чтобы в браузерах
	** Chrome и Safari можно было стилизовать инпуты */
	input[type="search"] {
		-webkit-appearance: none;
	}

	/* задаем отдельные стили для браузеров IE ниже 9-й версии */
	*+html .search {
		/* для IE7 подгоняем ширину под другие браузеры и добавляем правый
		** внутренний отступ, чтобы кнопка отправки встала на свое место */
		width: 28%;
		padding: 0 52px 0 0;
	}
	.search .input {
		border: 1px solid #DFDFDF;
		padding-top: 7px;
		padding-bottom: 8px;
	}
	.search .input:focus {
		border: 1px solid #000;
	}
	.search .search-submit {
		filter: alpha(opacity=50);
	}

	.search .search-submit:hover {
		filter: alpha(opacity=80);
	}

	.search__list {
		border-radius: 24px;
		background: #fff;
		overflow: hidden;
	}

	.search__list > ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
`;

