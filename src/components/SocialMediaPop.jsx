import React from 'react';
import "../styles/SocialMediaPop.css"

import FBicon from "../assets/icons/bxl-facebook.png"
import IGicon from "../assets/icons/bxl-instagram.png"
import WHicon from "../assets/icons/bxl-whatsapp.png"
import YTicon from "../assets/icons/bxl-youtube.png"

const ICON_ARRAY = [FBicon,IGicon,WHicon,YTicon];


const SocialMediaPop = () => {

    return (
        <div className="socialMedia">
            {ICON_ARRAY.map((icon,index) => {
                return (
                    <img src={icon} alt="icon"></img>
                )
            })}
        </div>
    );
}

export default SocialMediaPop;