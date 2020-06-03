import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from  'react-router-dom';
import  Sorting  from '../General/Sorting/Sorting';
import './Persons.sass';


class Persons extends Component {

  render() {
    const { loading } = this.props;
    const userPersons = this.props.persons;
	  const personItems = userPersons.map(item =>
      (<div key={item.id}>
        <Link className='persons__link' to={`/persons/${item.id}`}>   
          <img className='persons__img' src={item.ico_url} alt='persons icon'/>
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
        <div className='personsContainer'>
          <Sorting currentPage='persons'/>
          <div className='persons'>
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
