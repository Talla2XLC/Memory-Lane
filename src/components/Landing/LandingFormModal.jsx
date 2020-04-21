import React              from 'react'
import LandingFormPortal  from './LandingFormPortal'
import styled             from 'styled-components';

const LandingFormModal = ({
  title, isOpen, onCancel, onSubmit, children                                // accept these arguments by restructuring instead of props 
}) => {

  return (
    <>                                                                      
      { isOpen &&
        <LandingFormPortal>
          <LandingFormModalWrapper>
            <div className="modalOverlay">
              <div className="modalWindow">
                <div className="modalHeader">
                  {/* <div className="modalTitle">{title}</div> */}
                  <a className="times" onClick={onCancel}/>
                </div>
                <div className="modalBody">
                  {children}
                </div>
                <div className="modalFooter">
                  {/* <button onClick={onCancel}>Cancel</button>
                  <button onClick={onSubmit}>Submit</button> */}
                </div>
              </div>
            </div>
          </LandingFormModalWrapper>
        </LandingFormPortal>
      }
    </>
  )
}

const LandingFormModalWrapper = styled.div`
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
}

// .modalHeader,
// .modalBody,
// .modalFooter {
//   padding: 8px 20px;
// }

.modalBody {
  text-align: center;
}

.modalBody h1 {
  text-transform: uppercase;
  margin-bottom: 26px;
  font-size: 2rem;
}

.modalBody p {
  font-size: 2rem;
}

.modalHeader {
  min-height: 72px;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
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
}
.times:before {
  transform: rotate(45deg);
}
.times:after {
  transform: rotate(-45deg);
}
`
export default LandingFormModal