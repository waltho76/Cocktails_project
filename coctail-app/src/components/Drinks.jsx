import { useState, useEffect } from "react"
import axios from 'axios'
import Nav from "./Nav"


export default function Drinks (props) {


// we need to create a state for our data
const [drinks, setDrinks] = useState({})
// const [selectedDrink, setSelectedDrink] = useState(null)
//we need to call an axios function

useEffect(()=> {
    const getDrinks = async () => {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
            console.log(response.data)
            setDrinks(response.data)           
    }
    getDrinks()
}, [])
//we need to set state of our data

if (!drinks) {
    return <h2> Loading Page </h2>
} else{
    return (
        
        <div>
            {/* <Drinks drinks={drinks} /> */}
            <h2> Drinks Working</h2>
            <Nav/>
        </div>  
        
        
)}
}

//we need to see the data