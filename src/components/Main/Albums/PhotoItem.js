import React, { Component } from 'react';
import './PhotoItem.sass';
import InteractionIcons from 'components/Main/General/InteractionIcons';
import { Link } from  'react-router-dom';


export default class AlbumsItem extends Component {
  handleItemSelect(id) {
    if (this.props.isSelected) {
      this.props.selectId(id, 'del');
    } else {
      this.props.selectId(id, 'add');
    }
  }

  render() {
    const { isDesc, isImg, gridType, url, isSelected, id, view, name, author, date, coordinates } = this.props;
    const desc = isDesc ? this.props.desc : '';

    const img = isImg ?
      <Link
        to={{
          pathname: '/photo/' + id,
          props: {
            url: url,
            id: id,
            name: name,
            author: author,
            date: date,
            coordinates: coordinates
          }
        }}
        className='photo-link'
      >
        <img className={'img ' + gridType + '_img'} src={url} alt='gallery_pic'/>
      </Link> : '';

    const selectBTN =
      <button className={
        'select-button ' + gridType + '_select-button ' + (isSelected ? 'selected-button' : '')
      } onClick={() => this.handleItemSelect(id)}
      />;

    const imgDiv =
      <div className={'img-div ' + gridType + '_img-div'}>
        {img}
        {selectBTN}
      </div>;

    return (
      <div className={'albumItem ' + view}>
        {imgDiv}
        <div className='contentZone flex-column'>
          <span className={gridType === 'bigColView' ? 'head3 font3' : 'head3 font2'}>
            {name}
          </span>
          <div className='AutorDate'>
            <div className='text3'>{author}</div>
            <div className='text3'>{date}</div>
          </div>
          {desc}
          <div className='albumIcons'>
            <InteractionIcons fileUrl={url}/>
          </div>
        </div>
      </div>
    );
  }
}

