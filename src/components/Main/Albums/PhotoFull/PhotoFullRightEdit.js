
import React, {Component} from 'react';
import {ReactComponent as EditSVG} from '../svg/edit.svg';
import {ReactComponent as XMark} from '../svg/xMark.svg';
import {ReactComponent as AddBTN} from '../svg/addButton.svg';

class PhotoFullRightEdit extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
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
      if (!newTags.includes('')) {
        newTags.push('');
      }

      return {
        newPhotoState: {
          ...prevState.newPhotoState,
          tags: newTags
        }
      };
    });
  }

  newPerson(e) {
    e.preventDefault();
    this.setState(prevState => {
      const newPersons = prevState.newPhotoState.persons;
      if (!newPersons.includes('')) {
        newPersons.push('');
      }

      return {
        newPhotoState: {
          ...prevState.newPhotoState,
          persons: newPersons
        }
      };
    });
  }

  render() {
    const { tags, date, persons } = this.state.newPhotoState;

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
        <span className='text3'>{person}</span>
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
          <AddBTN className='addBtn' onClick={e => this.newPerson(e)} />
        </div>
        <div className='photo-full-right-item photo-full-right-place'>
          <span className='photo-full-right-span text3'>Место:</span>
        </div>
        <div className='photo-full-right-item photo-full-right-showFace'>
          <span className='photo-full-right-span text3'>Показать персоны на фото</span>
        </div>
        <div className='photo-full-right-BTN'>
          <button className='photo-full-editBTN'>
            <EditSVG/>
            <span className='photo-full-editBTN-span text3' onClick={this.handleEdit}>Отмена</span>
          </button>
        </div>
      </div>
    );
  }
}

export default PhotoFullRightEdit;
