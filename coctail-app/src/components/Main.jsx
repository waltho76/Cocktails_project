import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Home from "./Home";
import Drinks from "./Drinks";
import DrinksDetails from "./DrinksDetails";

export default function Main (props) {

    
        
const [drinks, setDrinks] = useState(drinks)
    setDrinks(props)
        
    return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/drinks" element={<Drinks drinks={drinks}/>}/>               
            {/* <Route path="/drinks/:id" element={<DrinksDetails drinks={drinks}/>}/> */}
        </Routes>
    </div>
    )
}