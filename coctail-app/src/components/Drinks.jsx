import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

export default function Drinks () {
        
// we need to create a state for our data
const [drinks, setDrinks] = useState({})
const [selectedDrink, setSelectedDrink] = useState(null)
//we need to call an axios function

useEffect(()=> {
    const getData = async () => {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
            console.log(response.data.drinks)
            setDrinks(response.data.drinks)    
            setSelectedDrink(true)
    }
    getData()
}, [])
//we need to set state of our data

//we need to see the data
console.log(drinks)

if (!drinks) {
    return <h2> Loading Page </h2>
} else{
    return (
        
        <div className="drinks">
            {drinks?.map((drink)=> (
            
                <div key={drink.idDrink}>
                    <h2>{drink.strDrink}</h2>
                    <img src={drink.strDrinkThumb} alt="#"/>
                    <p>{drink.strIngredient1}{drink.strMeasure1}</p>
                    <p>{drink.strInstructions}</p>
                </div>
            ))}

            {/* <div className="imgbox">
                <img src={image} alt={name}/>
            </div>
            <div className="drink-info">
                <h3>{strDrink}</h3>
               
                <Link to={strVideo} className="video">
                    Video
                </Link>

            </div> */}
            <h2> Drinks Working</h2>
            
        </div>  
        
        
)}
}

