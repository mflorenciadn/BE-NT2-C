import React from 'react';

const MyButton = (props) => {
 const handleClick = () => {
   alert('Presionaste el botón')
 }
 return (
   <button
     className="button"
     onClick={handleClick}>
      {props.text}
   </button>
 )
}

//Sin React
// const button = document.createElement('button');
// button.type = 'button';
// button.innerText = 'Mi botón con JS';
// document.body.appendChild(button);

//Sin JSX
// const MyButton = (props) => {
//  const handleClick = () => {
//    alert('Presionaste el botón')
//  }
//  return (
//    React.createElement("button", {className: 'button', onClick: handleClick}, props.text)
//  )
// }


export default MyButton;
