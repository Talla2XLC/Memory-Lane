import React, { Component } from 'react';
import { ReactComponent as IconSearch } from './svg/searchIcon.svg';
import { ReactComponent as FilterSearch } from './svg/filterIcon.svg';
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
            <button className='search-submit'>
              <IconSearch />
            </button>
            <input className='input' placeholder='Поиск' type='search'/>
            <button className='search-filter'>
              <FilterSearch />
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
  margin-right: 17px;

	.search {
		/* устанавливаем необходимую ширину формы в зависимости от дизайна
		** форма без проблем растягивается */

		/* кнопку отправки будем позиционировать абсолютно,
		** поэтому необходимо это свойство */
		position: relative;
	}


  .input {
		background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
		border-radius: 24px;
		width: 387px !important;
		height: 35px;
	}

	.input,
	.search-submit,
	.search-filter {
		/* отключаем бордюры у инпутов */
		border: none;
	}

	/* стили для поля ввода */
	.input {
		/* растягиваем поле ввода на всю ширину формы */
		width: 100%;

		/* за счет верхнего (8px) и нижнего (9px) внутренних отступов
		** регулируем высоту формы
		** внутренний отступ справа (37px) делаем больше левого,
		** т.к. там будет размещена кнопка отправки	*/
		padding: 8px 37px 9px 40px;

		/* чтобы ширина поля ввода (100%) включала в себя внутренние отступы */
		-moz-box-sizing: border-box;
		box-sizing: border-box;


		/* закругляем углы */
		border-radius: 24px;

		background: #fff;
		font: 14px Roboto, Tahoma, Arial, sans-serif;
		color: rgba(130, 132, 130, 0.3);
		outline: none;
		


		font-style: normal;
		font-weight: normal;
		line-height: 24px;
	}

	/* меняем оформление поля ввода при фокусе */
	.input:focus {
		box-shadow: inset 0 0 2px rgba(0,0,0,0.2), inset 0 1px 2px rgba(0,0,0,0.2);
		color: #000;
	}

	/* оформляем кнопку отправки */
	.search-submit,
	.search-filter {
		/* позиционируем кнопку абсолютно от правого края формы */
		position: absolute;

		/* растягиваем кнопку на всю высоту формы */
		height: 100%;

		cursor: pointer;
		background: 50% no-repeat;

		/* добавляем прозрачность кнопке отправки */
		opacity: 0.5;
	}
	
	.search-submit {
		left: 12px;
	}
	
	.search-filter {
		right: 12px;
	}

	/* при наведении курсора меняем прозрачность кнопки отправки */
	.search-submit:hover,
	.search-filter:hover{
		opacity: 1;
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
	.input {
		border: 1px solid #DFDFDF;
		padding-top: 7px;
		padding-bottom: 8px;
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

