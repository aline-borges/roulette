import botao from './style';
import React from 'react';

export const Button = (props) => {
  return (
    <button className={botao.button}>
      {props.name}
      <img src={props.logo} 
      alt="Checkout" 
      title={props.title} />
    </button>
  );
};

export default Button;