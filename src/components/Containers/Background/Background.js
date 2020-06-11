import BackgroundImage from './style';
import React from 'react';

export const Background = (props) => {
  return(
    <BackgroundImage>
      <img alt={props.name} src={props.link} />
    </BackgroundImage>
  )
}

export default Background
