import React, { Component } from 'react';
import './AddAndEdit.sass';

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
    this.props.unSetTegs(index);
  };

  handleInput = e => {
    const { value} = e.target;
    this.setState({ newTagText: value});
  }

  render() {
    return (
      <div className='tags-input'>
        <input
          type='text'
          className='infoGroup__input tagsInput'
          onChange={this.handleInput}
          onKeyUp={event => this.addTags(event)}
          value={this.state.newTagText}
          placeholder='Press enter to add tags'
        />
        <div className='tagWrap' >
          { this.props.tags.map((tag, index) => (
            <>
              <div className='tags' key={index}>{tag}</div>
              <div className='deleteTag' onClick={() => this.removeTags(index)} />
            </>
          ))}
        </div>
      </div>
    );
  }
}
