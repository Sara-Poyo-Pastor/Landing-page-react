/* eslint-disable react/prop-types */
import React from 'react'
import './button.css';
import play from "../../assets/imagenes_comprimidas/Google_Play.png";

function Button({clasesBoton, icon, botonContenido, link}){
    let clonedIcon = React.cloneElement(icon, {src:play, width:15, height:15})

    return(
<a href="https://factoriaf5.org"><button className={"Button " + clasesBoton}>
{botonContenido} {clonedIcon} {link}
</button>
</a>
    )
}

export default Button;
