import styled from 'styled-components';

export const ButtonContainer = styled.button`
background: #5DB07B;
box-shadow: 0px 1px 3px #B7B7B7;
border-radius: 24px;
padding: 10px 24px;
color: #FFFFFF;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 20px;
letter-spacing: 0.02em;
outline: none;
&:hover{
  background: #278147;
  box-shadow: 0px 1px 3px #B7B7B7;
  outline: none;
}
&:focus {
  box-shadow: inset 2px 2px 2px rgba(48, 48, 48, 0.2);
  outline: none;
}
`;
