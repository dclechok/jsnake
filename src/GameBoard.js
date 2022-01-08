import "./GameBoard.css";
import SnakeBuilder from "./SnakeBuilder";
import { useEffect, useState } from "react";

function GameBoard() {
  const [direction, setDirection] = useState(null); //randomize starting direction

  const [currentPosition, setCurrentPosition] = useState({
    top: null,
    left: null,
  }); //update current position state

  useEffect(() => {
    let snakeHeadPos = document.getElementById("snake-head");
    snakeHeadPos.style.position = "relative"; //relative to our game board
    // console.log(
    //   snakeHeadPos.offsetTop,
    //   snakeHeadPos.offsetWidth,
    //   snakeHeadPos.offsetHeight,
    //   snakeHeadPos.offsetLeft
    // );

    async function moveSnake() {
      window.addEventListener("keydown", (e) => {
        // our controls
        if (e.key === "w") {
          console.log("going north");
          snakeHeadPos.style.top = `${currentPosition.top - 1}px`; // 380 is MAX *from* top
          setCurrentPosition({
            top: (currentPosition.top -= 1),
            left: currentPosition.left,
          });
          if (snakeHeadPos.offsetTop <= 153) console.log("dead - north wall"); //ran into a wall
        }
        if (e.key === "a") {
          console.log("going west");
          snakeHeadPos.style.left = `${currentPosition.left - 1}px`;
          setCurrentPosition({
            top: currentPosition.top,
            left: (currentPosition.left -= 1),
          });
          if (snakeHeadPos.offsetLeft <= 342) console.log("dead - west wall"); //ran into a wall
        } // left -=1}
        if (e.key === "s") {
          console.log("going south");
          snakeHeadPos.style.top = `${currentPosition.top + 1}px`; // 380 is MAX *from* top
          setCurrentPosition({
            top: (currentPosition.top += 1),
            left: currentPosition.left,
          });
          setDirection(null);
          if (snakeHeadPos.offsetTop >= 533) console.log("dead - south wall");
        }
        if (e.key === "d") {
          console.log("going east");
          snakeHeadPos.style.left = `${currentPosition.left + 1}px`;
          setCurrentPosition({
            top: currentPosition.top,
            left: (currentPosition.left += 1),
          });
          if (currentPosition.left >= 381) console.log("dead - east wall"); //ran into a wall
        } 
      });
    }
    moveSnake();

  }, [direction]);

  return (
    <div className="gameboard">
      <SnakeBuilder />
    </div>
  );
}

export default GameBoard;
