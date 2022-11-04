import { Link } from "react-router-dom";



export default function Nav () {
    return (
        <nav className="navbar">
            <h3>Navbar</h3>
            <div>
                <Link to='/'>Home</Link>
                <Link to='drinks'>Drinks</Link> 
                {/* <Link to='/Footer'>Footer</Link> */}
            </div>
        </nav>
    )
}