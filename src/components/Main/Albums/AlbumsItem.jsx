import React, { Component } from 'react';
import './AlbumsItem.sass';
import { ReactComponent as Download } from './svg/download.svg';
import { ReactComponent as Forward } from './svg/forward.svg';

export default class AlbumsItem extends Component {
  handleItemSelect(id){
    if (this.props.isSelected) {
      this.props.selectId(id, 'del');
    } else {
      this.props.selectId(id, 'add');
    }
  }

  render() {
    const checkMark = '\u2713';

    const desc = this.props.isDesc ? <div className='itemDescription'>Ipsum ex commodo ad ad ipsum non quis laborum adipisicing reprehenderit aliqua veniam excepteur.</div> : '';

    const img = this.props.isImg ? <img className={'img ' + this.props.gridType + '_img'} src={this.props.url} alt='gallery_pic'/> : '';

    const selectBTN =
      <button className={'select-button ' + this.props.gridType + '_select-button'} onClick={() => this.handleItemSelect(this.props.id)}>
        {this.props.isSelected ? checkMark : ''}
      </button>;

    const imgDiv =
      <div className={'img-div ' + this.props.gridType + '_img-div'}>
        {img}
        {selectBTN}
      </div>;
    return (
      <div className={'albumItem ' + this.props.view}>
        {imgDiv}
        <div className='contentZone flex-column'>
          <span className={this.props.gridType === 'bigColView' ? 'itemName font3' : 'itemName font2'}>
            {this.props.name}
          </span>
          <div className='icons'>
            <Download className={this.props.gridType === 'bigColView' ? 'downloadIcon iconBig' : 'downloadIcon iconSmall'} />
            <Forward className={this.props.gridType === 'bigColView' ? 'iconBig' : 'iconSmall'} />
          </div>
          <div className="AutorDate">
            <div className='itemAutor'>{this.props.autor}</div>
            <div className='itemDate'>{this.props.date}</div>
          </div>
          {desc}
        </div>
      </div>
    );
  }
}

