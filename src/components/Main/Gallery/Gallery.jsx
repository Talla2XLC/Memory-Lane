import React, { Component } from 'react';
import GalleryItem from './GalleryItem.jsx';
import './Gallery.sass';

const galleryData = [
  {url: 'https://picsum.photos/400/400', name: 'itemName', autor: 'itemAutor', date: 'itemDate'},
  {url: 'https://picsum.photos/400/400', name: 'itemName1', autor: 'itemAutor1', date: 'itemDate1'},
  {url: 'https://picsum.photos/400/400', name: 'itemName2', autor: 'itemAutor2', date: 'itemDate2'},
  {url: 'https://picsum.photos/400/400', name: 'itemName3', autor: 'itemAutor3', date: 'itemDate3'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate4'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate5'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate6'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate5'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate5'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate5'}
];

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      biggerView: false
    };
  }

  changeView() {
    this.setState({biggerView: !this.state.biggerView});
  }
  render() {
    const viewClass = this.state.biggerView ? 'bigView' : 'smallView';
    return (
      <div className='galleryBlock'>
        <div className='sorting'>
          <div className='sorting__title'>Сортировка</div>
          <div className='sorting__date'>По дате</div>
          <div className='sorting__human'>По человеку</div>   
          <div className='sorting__view'
            onClick={this.changeView.bind(this)}>Вид</div>   
        </div>
        <div className={viewClass} > 
          {
            galleryData.map(card => {
              return <GalleryItem url={card.url} name={card.name} autor={card.autor} date={card.date} />;
            })
          }
        </div>
      </div>
    );
  }
}
