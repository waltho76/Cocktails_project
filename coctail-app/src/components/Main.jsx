import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Drinks from "./Drinks";
import RandomDrink from "./RandomDrink";


export default function Main () {

    
        

        
    return (
    <div>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Drinks" element={<Drinks/>}/>               
            <Route path="/RandomDrink" element={<RandomDrink/>}/>
        </Routes>
    </div>
    )
}