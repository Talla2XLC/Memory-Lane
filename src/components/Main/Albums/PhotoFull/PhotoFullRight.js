import React, { Component } from 'react';
import {ReactComponent as EditSVG} from '../svg/edit.svg';

class PhotoFullRight extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.props.setEditing(true);
  }

  render() {
    const { tags, date, persons } = this.props;

    return (
      <div className='photo-full-right'>
        <div className='photo-full-right-item photo-full-right-tags'>
          <span className='photo-full-right-span text3'>Тэги:</span>
          <div className='photo-full-right-tags-list'>
            {tags ? tags.map((tag, index) => {
              return <span
                key={index}
              >
                {'#' + tag}
              </span>;
            }) : 'Тэги отсуствуют'}
          </div>
        </div>
        <div className='photo-full-right-item photo-full-right-date'>
          <span className='photo-full-right-span text3'>Примерная дата:</span>
          <span className='text3'>{date ?? 'не определена'}</span>
        </div>
        <div className='photo-full-right-item photo-full-right-persons'>
          <span className='photo-full-right-span text3'>Персоны на фото:</span>
          {persons ? tags.map((person, index) => {
            return <span
              className='text3'
              key={index}
            >
              {person}
            </span>;
          }) : 'Не отмечены'}
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
            <span className='photo-full-editBTN-span text3' onClick={this.handleEdit}>Редактировать</span>
          </button>
        </div>
      </div>
    );
  }
}

export default PhotoFullRight;
