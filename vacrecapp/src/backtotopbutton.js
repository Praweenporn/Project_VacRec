import React from "react";
import {useEffect, useState} from "react"
import arrow from './img/Arrow.png'

function Backtotopbutton() {
    const [backtotopbutton, setBacktotopbutton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBacktotopbutton(true)
            } else {
                setBacktotopbutton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className="App">

    {backtotopbutton && (
        <button style={{
            position: "fixed",
            bottom: "50px", 
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
            borderRadius: "14px",
            border: "none",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            cursor: "pointer",
        }}
        onClick={scrollUp}
        >
            <img src={arrow} style={{
                position: "relative",
                width: "auto",
                height: "auto",
                marginBottom: "5px",
            }}></img>
        </button>
    )}
    </div>
}
export default Backtotopbutton;