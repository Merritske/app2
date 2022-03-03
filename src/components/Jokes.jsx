import { useState } from "react"
import like from "../images/like.png"

export default function Jokes(props) {
let [likes, setLikes] = useState(0)
function handleLikes(){
    setLikes(prevLikes=> prevLikes +1)
}
let [dislikes, setDislikes] = useState(0)
function handleDislikes(){
    setDislikes(prevdislikes=> prevdislikes +1)
}
const [isShown, setIsShown] = useState(true)
function toggleShown(){
setIsShown(prevIsShown => ! prevIsShown
)
}
    return (
        <div className="jokes">
           
                <li>
                   {props.setup && <p>{props.setup} </p>} 
                   {isShown && <p>{props.punchline}</p>} 
                    <button className="btnShow" onClick={toggleShown}>{isShown ? "hide" : "show"}</button>
                    <br />
                    <span><img src={like} className="like" onClick={handleLikes }/> {likes}
                    <img src={like} className="dislike" onClick={handleDislikes}/> {dislikes}</span>
                </li>


          
        </div>
    )
}