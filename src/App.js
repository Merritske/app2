
import './App.css';

import boxes from "./components/boxes"
import { useState } from "react"
import Box from './components/box';

import JokeVerz from './components/JokeVerz';
import Forms from './components/Forms';
import SingIn from './components/SignIn';
import WindowTrack from './components/windowTrack';
import Darkmode from './components/darkmode';


function App() {

  const[squares, setSquares] = useState(boxes)
  const box = squares.map(item=>{
    return  <Box 
    key={item.id} 
    id={item.id} 
    on={item.on} 
    toggle={handleClick} //je kan hier een functie van maken, 
    //toggle={()=> handleClick(item.id)}
    //id={item.id} kan dan weg en in box.jsx onClick={props.toggle}
    />
})
  function handleClick(id){

    //imperative methode
// setSquares(prevSquares=>{
//   const newSquares = []
//   for(let i=0; i< prevSquares.length; i++){
// const currentSquare = prevSquares[i]
// if(currentSquare.id === id){
//   const updatedSquare = {
//     ...currentSquare,
//     on: !currentSquare.on
//   }
//   newSquares.push(updatedSquare)
// }else{
//   newSquares.push(currentSquare)
// }
//   }
//   return newSquares
// })

//declerative method = beter
setSquares(prevSquares =>{
  return prevSquares.map((item)=>{
return item.id === id ? {...item, on: !item.on} : item
  })
})
}
const [messages, setMessages] = useState(["a","b","c"])
console.log(messages.length)
let variab 
if(messages.length === 3){
  variab = "messages"
}

  return (
    <div className="App">
<h1>
  Boxes will go here
 <Darkmode/>
</h1>
{box}
<WindowTrack/>
  <SingIn/>
{messages.length ===0 ? <h2>you are all caught up!</h2> : <h2>you have {messages.length} unread 
{messages.length > 1 ? " messages" : " message"} </h2> }
<JokeVerz/>
<h1>{variab}</h1>
<Forms/>
    </div>
  );
}

export default App;
