import "./featuredInfo.css";

import React from 'react'

export default function Meter({name , value , subtitle}) {
    return (
        <div className="featuredItem">
            <span className="featuredTitle">{name}</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{value}</span>
            </div>
            <span className="featuredSub">{subtitle}</span>
        </div>
    )
}
