import { useEffect, useState } from "react"
import "./Scroller.css"


export default function Scroller(){
    const [scroll, setScroll] = useState()


    const onScroll = ()=>{
        const percent = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100
        setScroll(percent)

    }

    useEffect(()=>{
        window.addEventListener("scroll", onScroll)
    }, [])


    return(
        <>
         <div className="scroller" style={{width: scroll + "%"}}>

         </div>
        </>
    )
}