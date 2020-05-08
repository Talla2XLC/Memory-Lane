import React, { Component } from 'react';
import AlbumsItem from './AlbumsItem.jsx';
import './Albums.sass';
import shortid from 'shortid';
import Dropdown from './Dropdown.jsx';

import Sorting from '../Sorting';

const galleryData = [
  {url: 'https://picsum.photos/400/400', name: 'itemName', autor: 'itemAutor', date: 'itemDate'},
  {url: 'https://picsum.photos/400/400', name: 'itemName1', autor: 'itemAutor1', date: 'itemDate1'},
  {url: 'https://picsum.photos/400/400', name: 'itemName2', autor: 'itemAutor2', date: 'itemDate2'},
  {url: 'https://picsum.photos/400/400', name: 'itemName3', autor: 'itemAutor3', date: 'itemDate3'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate4'},
  {url: 'https://picsum.photos/400/400', name: 'itemName5', autor: 'itemAutor5', date: 'itemDate5'},
  {url: 'https://picsum.photos/400/400', name: 'itemName6', autor: 'itemAutor6', date: 'itemDate6'},
  {url: 'https://picsum.photos/400/400', name: 'itemName7', autor: 'itemAutor7', date: 'itemDate7'},
  {url: 'https://picsum.photos/400/400', name: 'itemName8', autor: 'itemAutor8', date: 'itemDate8'},
  {url: 'https://picsum.photos/400/400', name: 'itemName9', autor: 'itemAutor9', date: 'itemDate9'}
];

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.setGridType = this.setGridType.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.state = {
      gridType: 'bigColView',
      rowItemView: false,
      itemSelected: []
    };
  }

  setGridType(gridId) {
    switch (gridId) {
      case 1:
        this.setState({gridType: 'bigColView'});
        this.setState({rowItemView: false});
        break;
      case 2:
        this.setState({gridType: 'smallColView'});
        this.setState({rowItemView: false});
        break;
      case 3:
        this.setState({gridType: 'bigRowView'});
        this.setState({rowItemView: true});
        break;
      case 4:
        this.setState({gridType: 'smallRowView'});
        this.setState({rowItemView: true});
        break;
      case 5:
        this.setState({gridType: 'noPreview'});
        this.setState({rowItemView: false});
        break;
      default:
        return;
    }
  }

  selectImage(id, action) {
    const newItemArr = this.state.itemSelected;
    switch (action) {
      case 'add':
        newItemArr.push(id);
        break;
      case 'del':
        newItemArr.splice(newItemArr.indexOf(id), 1);
        break;
      default:
        return;
    }
    this.setState({itemSelected: newItemArr});
  }

  render() {
    return (
      <>
        {/* <Sorting /> */}
        <div className='contentContainer '>
          <Sorting />
          <Dropdown gridId={this.setGridType}/>
          <div className={'albumContent ' + this.state.gridType} >
            {
              galleryData.map((card, index) => {
                return <AlbumsItem
                  id = {index}
                  view={this.state.rowItemView ? 'flex-row' : 'flex-column'}
                  url={card.url} name={card.name}
                  autor={card.autor} date={card.date}
                  key={ shortid.generate() }
                  gridType={this.state.gridType}
                  isDesc={!(this.state.gridType === 'smallRowView' || this.state.gridType === 'noPreview')}
                  isImg={this.state.gridType !== 'noPreview'}
                  selectId={this.selectImage}
                  isSelected={this.state.itemSelected.includes(index)}
                />;
              })
            }
          </div>
        </div>
      </>
    );
  }
}
