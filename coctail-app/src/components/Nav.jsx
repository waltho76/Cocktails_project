import { Link } from "react-router-dom";



export default function Nav () {
    return (
        <nav className="navbar">
            
            <div>
                <Link to='/'>Home</Link>
                <Link to='/drinks'>Drinks</Link> 
                <Link to='/RandomDrink'>Random Drink</Link>
                {/* <Link to='/Footer'>Footer</Link> */}
            </div>
        </nav>
    )
}