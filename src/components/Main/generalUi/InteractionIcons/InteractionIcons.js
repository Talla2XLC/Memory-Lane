import React, { Component } from 'react';
import {ReactComponent as DownloadIcon} from '../../../../assets/Images/dropdownAction/downloadIcon.svg';
// import {ReactComponent as ShareIcon} from './DropdownAction/svg/shareIcon.svg';
// import {ReactComponent as CommentsIcon} from '../svg/commentsIcon.svg';
import './InteractionIcons.sass';

export default class InteractionIcons extends Component {
  render() {
    const { fileUrl } = this.props;
    return (
      <div className='interaction-icons-div'>
        <a href={fileUrl} download>
          <DownloadIcon className='interaction-icon'/>
        </a>
        {/*<ShareIcon className='interaction-icon'/>*/}
        {/*<CommentsIcon className='interaction-icon'/>*/}
      </div>
    );
  }
}
