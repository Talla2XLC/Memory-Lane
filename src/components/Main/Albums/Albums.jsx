import React, { Component } from 'react';
import AlbumsItem from './AlbumsItem.jsx';
import './Albums.sass';
import shortid from 'shortid';
import Dropdown from './Dropdown.jsx';
import PerfectScrollbar from "react-perfect-scrollbar";



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

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.setGridType = this.setGridType.bind(this);
    this.state = {
      gridType: 'bigColView',
      rowItemView: false
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
        this.setState({rowItemView: true});
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className='galleryBlock'>
        <div className='sorting'>
          <div className='sorting__title'>
            Сортировка
          </div>
          <div className='sorting__date'>По дате</div>
          <div className='sorting__human'>По человеку</div>   
          <div className='sorting__view'>
            <Dropdown gridId={this.setGridType}/>
          </div>
        </div>
        <PerfectScrollbar component='div'>
          <div className={'albumContent ' + this.state.gridType} >
            {
              galleryData.map(card => {
                return <AlbumsItem
                  view={this.state.rowItemView ? 'flex-row' : 'flex-column'}
                  url={card.url} name={card.name}
                  autor={card.autor} date={card.date}
                  key={ shortid.generate() }
                  gridType={this.state.gridType}
                  isDesc={(this.state.gridType === 'smallRowView' || this.state.gridType === 'noPreview') ? false : true}
                  isImg={(this.state.gridType === 'noPreview') ? false : true}
                />;
              })
            }
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}
