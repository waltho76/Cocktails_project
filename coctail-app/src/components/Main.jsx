import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Drinks from "./Drinks";


export default function Main () {

    
        

        
    return (
    <div>
        <h3>Its Main</h3>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Drinks" element={<Drinks/>}/>               
            
        </Routes>
    </div>
    )
}