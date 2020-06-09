import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 15px;
  padding: 8px 24px;
  background: #FDFEC0;
  color: #000000;
  font: 500 0.9em 'Roboto Condensed',sans-serif;
  cursor: pointer;
  margin-top: 5px;
  margin-right: 15px;
  text-transform: uppercase;

  &:hover {
    background: #FAFA52;
    font-weight: 900;
  }
`;

export default Button;