import './GameBoard.css';
import SnakeBuilder from './SnakeBuilder';
import { useEffect, useState } from 'react';

function GameBoard(){

    const [direction, setDirection] = useState('east'); //randomize starting direction

    window.addEventListener('keyup', (e) => {
        if(e.key === 'w') setDirection('north');
        else if(e.key === 'a') setDirection('west');
        else if(e.key === 's') setDirection('south');
        else if(e.key === 'd') setDirection('east');
    });

    useEffect(()=> {
    let snakeHeadPos = document.getElementById('snake-head');
    console.log(snakeHeadPos.offsetTop, snakeHeadPos.offsetWidth, snakeHeadPos.offsetHeight, snakeHeadPos.offsetLeft);
    
    async function moveSnake(){
        if(direction === 'north') //top -= 1
        if(direction === 'south') //top += 1
        if(direction === 'west') // left -=1
        if(direction === 'east') // right += 1
        setTimeout(() => {
            snakeHeadPos.style.position = "relative"; //relative to our game board
            snakeHeadPos.style.left = "380px"; // 380 is MAX
            snakeHeadPos.style.top = "380px"; // 380 is MAX
        }, 200);
    }
    moveSnake();
    }, []);

    return (
        <div className="gameboard">
            <SnakeBuilder /> 
        </div>
    )

}

export default GameBoard;