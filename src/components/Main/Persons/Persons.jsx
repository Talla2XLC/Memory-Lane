import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from  'react-router-dom';
import  Sorting  from '../General/Sorting/Sorting';
import './Persons.sass';


class Persons extends Component {
  constructor(props) {
    super(props);
    this.setGridType = this.setGridType.bind(this);
    this.state = {
      styleType: 'personWrapMiddle'
    };
  }
  setGridType(gridId) {
	  switch (gridId) {
	    case 1:
	      this.setState({styleType: 'personWrapBig'});
	      break;
	    case 2:
	      this.setState({styleType: 'personWrapMiddle'});
	      break;
	    case 3:
	      this.setState({styleType: 'personWrapSmall'});
	      break;
	    default:
	      return;
	  }
  }

  // getAlbums = () => {
  //   const { sessionID } = this.props;
  //   console.log(sessionID)
  //   axios
  //     .post(
  //       'http://api.memory-lane.ru/db/getHistory',
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //           'Authorization': `${sessionID}`
  //         }
  //       })
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(error => console.error(error));
  // }


  render() {

    const { loading } = this.props;
    const userPersons = this.props.persons;
    console.log(userPersons)
	  const personItems = userPersons.map(item =>
      (<div key={item.id}>
        <Link className='persons__link' to={`/persons/${item.id}`}>   
          <img className='persons__img' src={(item.ico_url.length > 0) ? item.ico_url : 'http://placehold.it/365x365'} alt='persons icon'/>
        </Link> 
        <div className='head3 persons__align persons__name'>
          {item.last_name}  {item.first_name} {item.patronymic}
        </div>
        <div className=' text1 persons__align'>
        132 фотографии
        </div>
        <div className='text1 persons__align'>
        4 истории
        </div>
      </div>
      )
    );

    return (
      loading
        ?
        <div>loading</div>
        :
        <div className='persons'>
          <Sorting 
            currentPage='persons'
            setGridType={this.setGridType}
          />
          <div className={this.state.styleType}>
            {personItems}
          </div>
        </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons.persons,
    sessionID: state.session.sessionID,
    loading: state.persons.loading
  };
};

export default connect(mapStateToProps)(Persons);
