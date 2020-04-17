import React              from 'react'
import LandingFormPortal  from './LandingFormPortal'
import styled             from 'styled-components';

const LandingFormModal = ({
  title, isOpen, onCancel, onSubmit, children
}) => {

  return (
    <>
      { isOpen &&
        <LandingFormPortal>
          <LandingFormModalWrapper>
            <div className="modalOverlay">
              <div className="modalWindow">
                <div className="modalHeader">
                  <div className="modalTitle">{title}</div>
                  <button className="times" onClick={onCancel}/>
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
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modalHeader,
.modalBody,
.modalFooter {
  padding: 10px 20px;
}

.modalHeader {
  min-height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
}

.modalFooter button:last-child {
  margin-left: 10px;
}
`
export default LandingFormModal