import styled from 'styled-components';

export const ButtonContainer = styled.button`
background: ${props => 
    props.white ? '#F6F6F6' : '#2795FB'};
box-shadow: ${props => 
    props.white ? 'none' : '0px 1px 3px rgba(0, 0, 0, 0.3)'};
border-radius: 24px;
border-style: none;
padding: 10px 24px;
color: ${props => 
    props.white ? '#2795FB' : '#FFFFFF'};
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
letter-spacing: 0.006em;
cursor: pointer;
outline: none;
border: ${props => 
    props.white ? '2px solid #2795FB' : 'none'};
&:hover{
  background: ${ props => 
    props.white ? '#F6F6F6' : '#2795FB'};
  border: ${props => 
    props.white ? '2px solid #2795FB' : 'none'};
      color: ${props => 
    props.white ? '#2795FB' : '#FFFFFF'};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  outline: none;
}
&:focus {
  outline: none;
  border: ${props => 
    props.white ? '2px solid #3B3E3C' : 'none'};
    color: ${props => 
    props.white ? '#3B3E3C' : '#FFFFFF'};
}
&:active {  
  box-shadow: inset 2px 2px 2px rgba(48, 48, 48, 0.2);
}
`;
