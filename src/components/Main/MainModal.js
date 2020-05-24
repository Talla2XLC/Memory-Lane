import React, {Component} from 'react';
import FormPortal from './UserRegistrationPortal';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {modalClose} from '../../actions/modalClose';

class MainModal extends Component {
  render() {
    const { modalOpened, modalType, closeModal, children } = this.props;
    
    return (
      <>
        { modalOpened &&
          <FormPortal>
            <FormModalWrapper>
              <div className='modalOverlay'>
                <div className='modalWindow'>
                  <div className='modalHeader'>
                    <button className='times' onClick={e => {closeModal(modalType);}} />
                  </div>
                  <div className='modalBody'>
                    {children}
                  </div>
                  <div className='modalFooter' />
                </div>
              </div>
            </FormModalWrapper>
          </FormPortal>
        }
      </>
    );
  }
}

const FormModalWrapper = styled.div`
.modalOverlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modalWindow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  min-height: 200px;
  width: 568px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  heigth: 320px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

.modalBody {
  text-align: center;
}

.modalBody h1 {
  margin-bottom: 26px;
  font-size: 24px;
  color: #3B3E3C;
  font-family: Rubik;
}

.modalBody p {
  font-size: 16px;
  color: #828482;
}

.modalHeader {
  min-height: 42px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
}

.modalTitle {
  font-weight: bold;
}

.modalFooter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 72px;
}

.modalFooter button:last-child {
  margin-left: 10px;
}

.times {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 34px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #fff;
}
.times:hover {
  opacity: 1;
}
.times:before, .times:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
  top: 0;
}
.times:before {
  transform: rotate(45deg);
  right: 32px;
}
.times:after {
  transform: rotate(-45deg);
  right: 32px;
}

`;
const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: type => {
      dispatch(modalClose(type));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainModal);
