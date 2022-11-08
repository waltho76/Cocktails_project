import { Link } from "react-router-dom";



export default function Nav () {
    return (
        <nav className="navbar">
            
            <div className="links">
                <button id="home">
                <Link to='/'>Home</Link>
                </button>
                <button id="drks">
                <Link to='/drinks'>Drinks</Link> 
                </button>
                <button id="randrk">
                <Link to='/RandomDrink'>Random Drink</Link>
                </button>
               
            </div>
        </nav>
    )
}