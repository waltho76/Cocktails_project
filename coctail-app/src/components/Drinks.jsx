import { useState, useEffect } from "react"
import axios from 'axios'
import Modal from "./Modal"

export default function Drinks () {
// we need to create a state for our data
const [drinks, setDrinks] = useState(null)
const [openModal, toggleModal] = useState(false)
//we need to call an axios function
    useEffect(() => {
        const getData = async () => {
          const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
                setDrinks(response.data.drinks)  
        }
        getData()
    }, [])
//we need to set state of our data
//we need to see the data
if (!drinks) {
    return <h2> Loading Page </h2>
} else{
    return (
        <div className="container">
        <div className="drinks">
            
            {drinks.map((drink)=> (
                <div key={drink.idDrink}
                    className="previewCards">
                    <img onClick={toggleModal} 
                    className="img-thumb" 
                    src={drink.strDrinkThumb} 
                    alt="#"/>
                    {openModal && <Modal drink={drink} />}
                    <h2>{drink.strDrink}</h2>
                    <p>{drink.strCategory}</p>
                </div>
            ))}
            
        </div> 
        </div>       
        )
    }    
}


