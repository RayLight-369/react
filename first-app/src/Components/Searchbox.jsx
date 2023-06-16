import { memo, useState } from "react";
import Search from "../Utilities/Imgs/Vector.svg"

function Searchbox() {

    var [input, setInput] = useState("");

    return (
        <div className="search">
            <input type="text" placeholder="What are you looking for?" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button><img src={Search} alt="" /></button>
        </div>
    )
}

export default memo(Searchbox);