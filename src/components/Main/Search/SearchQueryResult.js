import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import './Search.sass';

class Search extends Component {
  constructor(props) {
    super(props)
	this.state = {
		results: [],
		filtered: '',
		isOpen: false
	};

    this.handleClick();
  }

  handleClick = () => {
	const { token, query } = this.props;
  	axios
	  .post(
		'http://api.memory-lane.ru/search',
	    {
		  search: query
	    },
	    {
		  headers: {
		    'Content-Type': 'application/json',
		    'Authorization': `${token}`
		  }
	    }
	  )
	  .then(res => {
	  console.warn(res);
	if(res) {
		this.setState({
		  results: res.data.conten,
		  loading: false,
		  isOpen: true
		}); 
		console.log(res.data.conten[0].story);
	} else {
		  console.error(res.data.error);
	  }
    
	  })
	  .catch((error) => {
		if (axios.isCancel(error) || error) {
		  this.setState({
			loading: false,
			message: 'Failed to fetch results. Please check network',
		  });
		}
	  }); 
  };

  renderStoryResults = () => {
  const { results, isOpen } = this.state;
	return (
	  <div className="results-container">
		{ results.map((result) => {
		  return (
			<a key={result.story.id} href='/#' className="result-items">
			  <h6 className="image-username">{result.story.story_name}</h6>
			  <div className="image-wrapper">
				<img className="image" src='/#' alt="/#"/>
			  </div>
			</a>
		  );
		})}
	  </div>
	)
  }

  render = () => {
    return (
      <div>
	    { this.renderStoryResults() }	  
	  </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
	  query: state.searchQueryInfo.query,
	  token: state.session.sessionID
	};
};

export default connect(mapStateToProps)(Search);

const SearchWrapper = styled.div`
  margin-right: 17px;
	  
	.search {
		/* устанавливаем необходимую ширину формы в зависимости от дизайна
		** форма без проблем растягивается */

		/* кнопку отправки будем позиционировать абсолютно,
		** поэтому необходимо это свойство */
		position: relative;
		
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 14px;
	}


  .input {
		background: #FFFFFF;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
		border-radius: 24px;
		width: 387px !important;
		height: 35px;
		line-height: 14px;
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
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
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
	input[type="text"] {
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

