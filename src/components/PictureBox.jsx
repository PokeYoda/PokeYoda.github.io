import { useState } from "react";
import "./PictureBox.css"

function PictureBox(props){

    return(
        <div className="PictureBox-main">
            <img className="PictureBox-img" src={props.url}/>
        </div>
    )
}

export default PictureBox