import React, {Component} from 'react';
import {ReactComponent as XMark} from '../svg/xMark.svg';
import {ReactComponent as AddBTN} from '../svg/addButton.svg';
import DropdownPersons from '../../General/DropdownPersons/DropdownPersons';
import {connect} from 'react-redux';
import {ReactComponent as RadioBTN} from '../svg/radioBTN.svg';
import {ButtonContainer} from '../../Button';
import { getAlbums } from 'actions/actionAlbums';
import axios from 'axios';

class PhotoFullRightEdit extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.handleShowFace = this.handleShowFace.bind(this);
  }

  state = {
    newPhotoState: {
      tags: this.props.tags,
      date: this.props.date,
      persons: this.props.persons
    }
  };

  handleEdit() {
    this.props.setEditing(false);
  }

  handleShowFace(status) {
    this.props.setShowFace(status);
  }

  handleTagsInput = e => {
    e.persist();

    const { value, id } = e.target;

    this.setState(prevState => {
      const newTags = prevState.newPhotoState.tags;
      newTags[id] = value;

      return {
        newPhotoState: {
          ...prevState.newPhotoState,
          tags: newTags
        }
      };
    });
  }

  clearTag(e, id) {
    e.persist();
    e.preventDefault();
    this.setState(prevState => {
      const newTags = prevState.newPhotoState.tags;
      newTags.splice(id, 1);

      return {
        newPhotoState: {
          ...prevState.newPhotoState,
          tags: newTags
        }
      };
    });
  }

  clearPerson(e, id) {
    e.persist();
    e.preventDefault();
    this.setState(prevState => {
      const newPersons = prevState.newPhotoState.persons;
      newPersons.splice(id, 1);

      return {
        newPhotoState: {
          ...prevState.newPhotoState,
          persons: newPersons
        }
      };
    });
  }

  newTag(e) {
    e.preventDefault();
    this.setState(prevState => {
      const newTags = prevState.newPhotoState.tags;
      if (newTags) {
        if (!newTags.includes('')) {
          newTags.push('');
        }
      }

      return {
        newPhotoState: {
          ...prevState.newPhotoState,
          tags: newTags
        }
      };
    });
  }

  addPerson(id) {
    this.setState(prevState => {
      let newPersons = prevState.newPhotoState.persons;
      if (newPersons) {
        if (!newPersons.includes(id.toString())) {
          newPersons.push(id.toString());
        }
      } else {
        newPersons = [id.toString()];
      }

      return {
        newPhotoState: {
          ...prevState.newPhotoState,
          persons: newPersons
        }
      };
    });
  }

  commitChanges = () => {
    const { downloadAlbums, token, photoId } = this.props;
    const persons = this.state.newPhotoState.persons;
    const tags = this.state.newPhotoState.tags;

    const newData = {
      id: photoId,
      tags: tags ?? [],
      persons: persons
    };

    Object.keys(newData).length ?
      (axios
        .post(
          'http://api.memory-lane.ru/db/updateImages',
          newData,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${token}`
            }
          })
        .then(res => {
          console.log(res);
          if (res.data.result) {	// res.status === 200
            this.handleEdit();
            downloadAlbums();
          } else {	// res.status !== 200
            console.error(res.data.error);
            alert(`${res.data.error}`);
          }
        })
        .catch(error => console.error(error))
      )
      : this.handleEdit();
  }

  render() {
    const { tags, date, persons } = this.state.newPhotoState;
    const { allPersons, showFace } = this.props;

    const tagsList = tags ? tags.map((tag, index) => (
      <label
        key={index} htmlFor={'photo-full-right-tag-' + tag}
        className='photo-full-right-tags-edit'
      >
        <input
          id={index}
          className='photo-full-right-tags-edit-input'
          type='text'
          name={'photo-full-right-tag-' + tag}
          value={tag}
          onChange={this.handleTagsInput}
        />
        <XMark className='xMark' onClick={e => this.clearTag(e, index)} />
      </label>
    )) : 'Тэги отсуствуют';

    const personsList = persons ? persons.map((person, index) => (
      <div
        key={index}
        className='photo-full-right-person-edit'
      >
        <span className='text3'>{allPersons.find(pers => pers.id === person).first_name + ' ' + allPersons.find(pers => pers.id === person).last_name}</span>
        <XMark className='xMark' onClick={e => this.clearPerson(e, index)} />
      </div>
    )) : 'Персоны не отмечены';

    return (
      <div className='photo-full-right'>
        <div className='photo-full-right-item photo-full-right-tags'>
          <span className='photo-full-right-span text3'>Тэги:</span>
          <div className='photo-full-right-tags-list'>
            {tagsList}
            <AddBTN className='addBtn' onClick={e => this.newTag(e)} />
          </div>
        </div>
        <div className='photo-full-right-item photo-full-right-date'>
          <span className='photo-full-right-span text3'>Примерная дата:</span>
          <span className='text3'>{date ?? 'не определена'}</span>
        </div>
        <div className='photo-full-right-item photo-full-right-persons'>
          <span className='photo-full-right-span text3'>Персоны на фото:</span>
          {personsList}
          <DropdownPersons persons={allPersons} selectPerson={this.addPerson}/>
        </div>
        <div className='photo-full-right-item photo-full-right-place'>
          <span className='photo-full-right-span text3'>Место:</span>
        </div>
        <div className='photo-full-right-item photo-full-right-showFace'>
          <span className='photo-full-right-span text3'>Показать персоны на фото</span>
          <RadioBTN
            className={showFace ? 'showFace-radio showFace-active' : 'showFace-radio'}
            onClick={showFace ? () => this.handleShowFace(false) : () => this.handleShowFace(true)}
          />
        </div>
        <div className='photo-full-right-BTN'>
          <ButtonContainer className='choicePhoto__button cancel-BTN' white={true} onClick={this.handleEdit}>Отмена</ButtonContainer>
          <ButtonContainer className='choicePhoto__button cancel-BTN' onClick={this.commitChanges}>Готово</ButtonContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    downloadAlbums: () => {
      dispatch(getAlbums());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFullRightEdit);
