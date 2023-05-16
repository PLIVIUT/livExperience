import React from "react";


function Card(props) {
    let innerBadgeText
    if (props.openSpots === 0) {
        innerBadgeText = "SOLD OUT :("
    }
    else if (props.location === "Online") {
        innerBadgeText = "ONLINE"
    }
    return (
        <div className="main-card-div">
            {innerBadgeText && <div className="sold-out">{innerBadgeText}</div>}
            <img className="card-img" src={`../images/${props.coverImg}`}></img>
            <div className="card-details">
                <div className="card-score">
                    <img className="card-pic" src={`../images/star.png`}></img>
                    <p className="card-numofreviews">{props.reviewCount}</p>
                    <p className="card-location">{props.location}</p>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-price">{props.price}<span> / person</span></p>
            </div>
        </div >
    )
}

export default Card