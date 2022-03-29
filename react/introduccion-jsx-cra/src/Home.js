import React from 'react';
import MyButton from './MyButton';

const Home = (props) => {
 return (
    <>
    <p>Esto es Home</p>
    <MyButton text={props.buttonText}/>
   </>
 )
}

export default Home;
