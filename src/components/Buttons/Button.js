import React from 'react';
import Botao from './style';
import Icon from '../Images/Icon';

const Button = (props) => {
  return (
    <Botao>
      {props.name}
      <Icon src={props.src} />
    </Botao>
  );
};

export default Button;