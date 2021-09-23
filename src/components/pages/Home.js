import React from 'react';
import backgroundImage from '../../assets/IMG_1595.jpg'

export default function Home() {
  var background = {backgroundSize : 'cover'};
  var textStyle = {
    position: 'absolute', 
    top: '45%', 
    left: '30%',
    color: 'white'
  };
  return (
    <body>
    <img alt='mountainImg' src= {backgroundImage} style={{background}}></img> 
    <h1 style={textStyle} className= "text-center text-8xl md\:my-auto md:align-text-top sm:align-text-top" >Grace Butler's<br></br> Portfolio</h1>
    </body>
  );
}