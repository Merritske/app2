import { useState } from "react"

export default function Darkmode(props){
const [dark, setDark] = useState()
function handleClick(){
    setDark(prevDark => !prevDark)
}
    return(
        <div className={dark ? "darkMode" : ""}>
     <span>Light</span>  

<label className={dark ? "dark" : "light"}>
  <input type="checkbox"/>
  <span className="slider round" onClick={handleClick}></span>
</label>
       

            <span>Dark</span>
        </div>
    )
}