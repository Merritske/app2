import { useState } from "react"




export default function Box(props){ 
   
    const styles={
        backgroundColor: props.on? "#222" : "#ccc" ,
   
   color:"white",
    }

 return(
<div style={styles}  className="box" onClick={()=>props.toggle(props.id)}>
{props.id} 
    </div>
 )}

