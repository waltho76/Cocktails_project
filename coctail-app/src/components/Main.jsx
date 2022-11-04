import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Drinks from "./Drinks";

export default function Main () {
    return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Drinks" element={<Drinks/>}/>
        </Routes>
    </div>
    )
}