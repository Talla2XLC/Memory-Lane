import React, { Component } from 'react';
import { ReactComponent as TegIcon } from './svg/addTegIcon.svg';
import './Persons.sass';
export default class TagsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.tags,
      newTagText: ''
    };
  }
  addTags = (e) => {
    const newText = this.state.newTagText;
    if (e.key === 'Enter' && e.target.value !== '') {
      this.props.setTegs(newText);
      this.setState({
        newTagText: '' 
      });
    }
  }
  removeTags = index => {
    // this.props.unsetTegs(index)
    console.log(index)
  };


  // setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  handleInput = e => {
    const { value} = e.target;
    this.setState({ newTagText: value});
  }
  render() {
    return (
      <div className='tags-input'>
        <input
          type='text'
          className='infoGroup__input'
          onChange={this.handleInput}
          onKeyUp={event => this.addTags(event)}
          value={this.state.newTagText}
          // value={this.props.tags}
        />
        <div className='tagWrap' >

          { this.props.tags.map(item => (
                      <>
            <div
            // onClick={this.removeTags(item)}
            // key={item.id}
            >{item}</div>
            <div>x</div>
            </>
          ))}
        </div>
        {/* <TegIcon onClick={this.addTags}/> */}
      </div>
    );
  }
}
