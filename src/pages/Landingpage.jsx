import '../index.css';
import Navbar from "../components/atoms/navbar";
import Button from "../components/button/Button";
import Title from "../components/title/Title";
import iconoApple from "../assets/imagenes_comprimidas/icono_apple.svg";
import phone from "../assets/imagenes_comprimidas/header-iphone.png";
import play from "../assets/imagenes_comprimidas/Google_Play.png";

function Landingpage(){
    return(
        <>
        <Navbar/>
        <div className="landing">
                <div className="container-text">
                    <div className="principal">
                        <div className="text">
                            <Title/>
                        <div className="download_button">
                            <Button clasesBoton="botonBg" botonContenido="DOWNLOAD" icon={<img src={iconoApple}/>}></Button>
                            <Button clasesBoton="botonBg" botonContenido="DOWNLOAD" icon={<img src={play}/>}></Button> 
                        </div> 
                        </div>
                    </div>
                </div>
        </div>
        <div className='iphone'>
        <div className="container-iphone">
            <img className="iphone_landing" src={phone}/>
        </div>
        </div>
        </>
    )
}
export default Landingpage