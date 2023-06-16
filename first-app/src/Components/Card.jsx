import { memo, useCallback } from "react";
import Star from "../Utilities/Imgs/star.svg"
import Heart from "../Utilities/Imgs/heart.svg"
import FilledHeart from "../Utilities/Imgs/filledheart.svg"

function Card({ title, location, stars, price, liked, img }) {

    var stars_ = [];

    for (let i = 0; i < stars; i++) {
       stars_.push(<img src={Star} alt="" key={i}/>)
    }

    const handleHeartClick = useCallback(e => {
        e.target.classList.toggle("liked");
        e.target.src = e.target.classList.contains("liked") ? FilledHeart : Heart;
    }, [liked])

    return (
        <div className="card">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="data">
                <p className="title">{ title }</p>
                <img src={liked === true ? FilledHeart : Heart} alt="" className="heart" onClick={handleHeartClick}/>
                <p className="location">{ location }</p>
                <div className="stars">
                    
                    {stars_}
                        
                </div>
                <p className="price">Rs. { price }</p>
            </div>
        </div>
    )
}
export default memo(Card);