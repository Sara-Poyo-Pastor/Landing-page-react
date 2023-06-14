import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landingpage from "../pages/Landingpage";

const RouterItem = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element= {<Landingpage/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterItem