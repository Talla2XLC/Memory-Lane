import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Persons.sass';
import { Link } from  'react-router-dom';
import  Sorting  from '../Sorting';

class Persons extends Component {

  render() {
    const { loading } = this.props;
    const userPersons = this.props.persons;
	  const personItems = userPersons.map(item =>

      (<div key={item.id}>
        <Link className='personsLink' to={`/persons/${item.id}`}>   
          <img className='personsImg' src='https://www.fillmurray.com/g/238/149' />
        </Link>
        <div className='head3 textAlign personsName'>
          {item.last_name}  {item.first_name} {item.patronymic}
        </div>
        <div className=' text1 textAlign'>
        132 фотографии
        </div>
        <div className='text1 textAlign'>
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
          <Sorting className='personsSorting' album={true}/>
          <div className='personsContainer'>
            {personItems}</div>

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
