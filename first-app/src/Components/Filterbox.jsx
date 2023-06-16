import { createContext, memo, useEffect, useRef, useState } from "react";
import Pricebox from "./Pricebox";

let SliderValues = createContext();

function Slider({ from, to }) {

    return (
        <div id="slider">
            <input type="range" name="from" id="from" min={1} max={150000000}/>
            <input type="range" name="to" id="to" min={1} max={150000000}/>
        </div>
    )

}
function Filterbox() {

    useEffect(() => {

        let handleScroll = () => {

            let filterBox = document.querySelector("div#filter-box");
            let Y = window.scrollY;
            
            if (Y > 87) {
                filterBox.style.position = "fixed";
            } else {
                filterBox.style.position = "relative"
            }
        }

        document.body.addEventListener("scroll", handleScroll);

        return () => document.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div id="filter-box">
            <div id="price">
                <p>Price</p>
                <div className="price-boxes">
                    <Pricebox id="starting"/>
                    <hr style={ { width: "12px", display: "inline-block" } } />
                    <Pricebox id="ending"/>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default memo(Filterbox);