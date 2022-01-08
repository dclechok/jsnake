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

    console.log(
      snakeHeadPos.offsetTop,
      snakeHeadPos.offsetWidth,
      snakeHeadPos.offsetHeight,
      snakeHeadPos.offsetLeft
    );

    async function moveSnake() {
      snakeHeadPos.style.position = "relative"; //relative to our game board]
      window.addEventListener("keyup", (e) => {
        if (e.key === "w") setDirection("north");
        else if (e.key === "a") setDirection("west");
        else if (e.key === "s") setDirection("south");
        else if (e.key === "d") setDirection("east");
      });

        if (direction === "north") {
          console.log("going north");
          setTimeout(() => {
            snakeHeadPos.style.top = `${currentPosition.top - 1}px`; // 380 is MAX *from* top
          }, 50);
          setCurrentPosition({
            top: (currentPosition.top -= 1),
            left: currentPosition.left,
          });
        } //top -= 1
        if (direction === "south") {
          console.log("going south");
          setTimeout(() => {
            snakeHeadPos.style.top = `${currentPosition.top + 1}px`; // 380 is MAX *from* top
          }, 50);
          setCurrentPosition({
            top: (currentPosition.top += 1),
            left: currentPosition.left,
          });
        } //top += 1
        if (direction === "west") {
          console.log("going west");
          setTimeout(() => {
            snakeHeadPos.style.left = `${currentPosition.left - 1}px`;
          }, 50);
          setCurrentPosition({
            top: (currentPosition.top),
            left: currentPosition.left -= 1,
          });
        } // left -=1
      if (direction === "east") {
        console.log("going east");
        setTimeout(() => {
          snakeHeadPos.style.left = `${currentPosition.left + 1}px`;
        }, 50);
        setCurrentPosition({
          top: currentPosition.top,
          left: (currentPosition.left += 1),
        });
      }// right += 1
    }
    moveSnake();
    // setDirection(null);
  }, [direction]);

  return (
    <div className="gameboard">
      <SnakeBuilder />
    </div>
  );
}

export default GameBoard;
