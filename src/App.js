import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

export default function App()  {

    const [advice, setAdvice] = React.useState('');

    useEffect(
        ()=>{
            fetchAdvice();
        },[]
    );

    function fetchAdvice(){
        axios.get('https://api.adviceslip.com/advice').then(response => {
           
            setAdvice(response.data.slip.advice);
            
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='app'>
            <div className = 'card'>
                <h1 className='heading'>{advice}</h1>
                <button className='button' onClick={fetchAdvice}>
                    <span>GIVE ME ADVICE</span>
                </button>
                </div>
        </div>
            
    );
}