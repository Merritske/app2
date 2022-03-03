import { useEffect, useState } from "react"
export default function WindowTrack() {

    const [show, setShow] = useState(true)

    function toggle() {
        setShow(prevShow => !prevShow)
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        function watchWidth() {
console.log("setup")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth )

        return function(){
             console.log("cleanup")
            window.remove.addEventListener("resize", watchWidth )
           
        }
    }, [])
    return (
        <div>hello
            <button onClick={toggle}>Toggle WindowTracker</button>
            {show && <div>window width: {windowWidth}</div>}
        </div>
    )
}