import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as IconSearch } from "../../../assets/Images/search/searchIcon.svg";
import { ReactComponent as FilterSearch } from "../../../assets/Images/search/filterIcon.svg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { querySearch } from "../../../redux/actions/actionSearchQuery";

class SearchAdd extends Component {
  state = {
    query: "",
    results: [],
    filterHoverColor: "themeBlackout",
  };

  handleClick = () => {
    const { query } = this.state;
    const { addQuery } = this.props;

    if (query) {
      addQuery(query);
      this.props.history.push("/search/" + query);
    }
  };

  handleChange = (e) => {
    const { value } = e.target; // destructuring applied instead const value = event.target.value;
    this.setState({ query: value });
  };

  render() {
    // console.log(this.state.filterHoverColor);
    return (
      <SearchWrapper>
        <div className="search">
          <button className="search-submit" onClick={this.handleClick}>
            <IconSearch />
          </button>
          <input
            className={"input " + this.state.filterHoverColor}
            placeholder="Поиск"
            type="text"
            onChange={this.handleChange}
            onMouseEnter={() =>
              this.setState({ filterHoverColor: "themeBlackout" })
            }
            onMouseLeave={() => this.setState({ filterHoverColor: "" })}
            onFocus={() => this.setState({ filterHoverColor: "themeBlackout" })}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                this.handleClick();
              }
            }}
          />

          <button className={"search-filter " + this.state.filterHoverColor}>
            <FilterSearch />
          </button>
        </div>
      </SearchWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.session.sessionID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuery: (query) => {
      dispatch(querySearch(query));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchAdd));

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
    background: #ffffff;
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

  .search-submit:active,
  .search-submit:focus,
  .search-filter:active,
  .search-filter:focus {
    outline: none;
  }

  .search-filter {
    right: 12px;
  }

  /* при наведении курсора меняем прозрачность кнопки отправки */
  .search-submit:hover,
  .search-filter:hover {
    opacity: 1;
  }

  /* данное свойство необходимо для того, чтобы в браузерах
	** Chrome и Safari можно было стилизовать инпуты */
  input[type="text"] {
    -webkit-appearance: none;
  }

  /* задаем отдельные стили для браузеров IE ниже 9-й версии */
  * + html .search {
    /* для IE7 подгоняем ширину под другие браузеры и добавляем правый
		** внутренний отступ, чтобы кнопка отправки встала на свое место */
    width: 28%;
    padding: 0 52px 0 0;
  }
  .input {
    border: 1px solid #dfdfdf;
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
  .themeBlackout,
  .themeBlackout::placeholder {
    opacity: 1;
    color: #828482;
  }

  .themeBlackout > svg {
    fill: #3b3e3c;
  }

  .themeBlackout > svg path {
    fill: inherit;
  }
`;
