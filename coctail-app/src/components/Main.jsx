import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Drinks from "./Drinks";
import RandomDrink from "./RandomDrink";
import DrinkDisplay from "./DrinkDisplay"

export default function Main () {

    
        

        
    return (
    <div>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Drinks" element={<Drinks/>}/>               
            <Route path="/RandomDrink" element={<RandomDrink/>}/>
            <Route path="/DrinkDisplay" element={<DrinkDisplay/>}/>
        </Routes>
    </div>
    )
}