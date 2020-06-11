import React, { useEffect } from "react";
import Winwheel from "winwheel";
import Container from '../Containers/Container';
import Button from '../Buttons/Button';
import Title from '../Texts/Title';
import Subtitle from '../Texts/Subtitle';
import donuts from '/Cmder/roulette/src/assets/img/donuts.svg';

const Roulette = () => {
  let theWheel;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    theWheel = new Winwheel({ 
      'canvasId': "roulette",
      'numSegments': 10,
      'innerRadius': 30,
      'outerRadius': 200,
      'fillStyle': '#e7706f',
      'lineWidth': 2,
      'rotationAngle': 360,
      'imageOverlay': true,
      'pointerAngle': 0,
      'responsive': true,
      'textFontFamily': 'Roboto',
      'textFontSize': 12,
      'textAlignment': 'center',
      'textMargin': 0,
      'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'spins': 8,
        'callbackFinish': alertFood,
        'callbackBefore': drawTriangule
      },
      'segments':[
        {'fillStyle' : '#E5646E', 'text' : 'CHINESE FOOD'},
        {'fillStyle' : '#F2F2F6', 'text' : 'JAPANESE FOOD'},
        {'fillStyle' : '#4C509C', 'text' : 'THAI FOOD'},
        {'fillStyle' : '#95CC81', 'text' : 'ITALIAN FOOD'},
        {'fillStyle' : '#F2F2F6', 'text' : 'FRENCH FOOD'},
        {'fillStyle' : '#E5646E', 'text' : 'GERMAN FOOD'},
        {'fillStyle' : '#FFE07D', 'text' : 'SPANISH FOOD'},
        {'fillStyle' : '#95CC81', 'text' : 'PORTUGUESE FOOD'},
        {'fillStyle' : '#5055A0', 'text' : 'BRAZILIAN FOOD'},
        {'fillStyle' : '#FFE07D', 'text' : 'MEXICAN FOOD'}

      ],
      'pointerGuide':{
          'display': true,
          'strokeStyle': 'black',
          'lineWidth': 2
        }
    });
  }, []);

  const Start = () => {
    theWheel.startAnimation();
  }

  const alertFood = () => {
    let winningSegment = theWheel.getIndicatedSegment();
    alert("The Food Choice is " + winningSegment.text + "!");
  }

  const drawTriangule = () => {
    let ctx = theWheel.ctx;

    ctx.strokeStyle = '#000000';     // Set line colour.
    ctx.fillStyle   = '#ffffff';     // Set fill colour.
    ctx.lineWidth   = 2;
    ctx.beginPath();              // Begin path.
    ctx.moveTo(170, 5);           // Move to initial position.
    ctx.lineTo(230, 5);           // Draw lines to make the shape.
    ctx.lineTo(200, 40);
    ctx.lineTo(171, 5);
    ctx.stroke();                 // Complete the path by stroking (draw lines).
    ctx.fill();   
  }

  return (
    <Container>
      <canvas id="roulette" width="880" height="450"></canvas>
      <Title>Roulette</Title>
      <Subtitle>Find a recipe in one click!</Subtitle>
      <Button name="I Want Now" src={donuts} onClick={Start} />
    </Container>
  )
};

export default Roulette;