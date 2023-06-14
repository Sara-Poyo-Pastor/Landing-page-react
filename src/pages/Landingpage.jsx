import '../index.css';
import Navbar from "../components/atoms/navbar";
import Button from "../components/button/Button";
import Title from "../components/title/Title";

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
                            <Button/>
                            <Button/> 
                        </div> 
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Landingpage