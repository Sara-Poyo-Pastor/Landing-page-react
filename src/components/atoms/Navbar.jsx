import './navbar.css';
import logo from '../../assets/imagenes_comprimidas/logo.svg';
import down_arrow from '../../assets/imagenes_comprimidas/down_arrow.png';

function Navbar(){
    return(
        <>
    <header className="header">
            <a className="logo-navbar" href="index.html"><img src={logo} alt="logo" id="logo"/></a>
            <input type="checkbox" id="check"/>  
            <label htmlFor="check" className="menu-view">
            &#x2261;
            </label>
            <nav className="menu">
                <a href="#1">DESCRIPTION</a>
                <a href="#">FEATURES</a>
                <a href="#3">SCREENS</a>
                <a href="#">EXTRA <img src={down_arrow} alt="down arrow"/></a>
                <a href="https://factoriaf5.org/" id="download">DOWNLOAD</a>
                <label htmlFor="check" className="menu-hide">
                    &#215;
                </label>
            </nav>
    </header>
        </>
    )
}
export default Navbar