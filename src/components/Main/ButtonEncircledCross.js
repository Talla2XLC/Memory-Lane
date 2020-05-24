import styled from 'styled-components';

export const ButtonEncircledCross = styled.div`
background: transparent;
position: absolute;
top: 5px;
right: 200px;
width: 18px;
height: 18px;
cursor: pointer;
border: 2px solid #DADADA;
border-radius: 50%;

&:before,
&:after {
  content: "";
  position: absolute;
  top: 8px;
  left: 3px;
  width: 12px;
  height: 2px;
  background: #DADADA;
  border-radius: 20%;
}

&:before {
  --webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

&:after {
  --webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
`;
