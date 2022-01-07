import "./SnakeBuilder.css";

// class Snake{
//     position = [0, 0];
//     constructor(){
//         this.length = 1;
        
//     }

//     set length(newLength){
//         this.length = newLength;
//     }
    
//     get length(){
//         return this.length;
//     }

//     grow(){
//         return this.length += 1;
//     }
// }

function SnakeBuilder() {
  return <div className="segment" id="snake-head"></div>;
}

export default SnakeBuilder;
