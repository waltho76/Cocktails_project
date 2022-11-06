import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RandomDrink () {
    const [drinks, setDrinks] = useState(null)
    
    // const getDrink = useState(null) 
        
        
 
useEffect(()=> {
    const getData = async () => {
        
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
   
        // console.log(response.data.drinks)
        setDrinks(response.data.drinks)
    
    
}
    getData()
       
},[])
// console.log(drinks)

if (!drinks) {
    return <h2> Loading Page </h2>
} else{
    return (
        <div className="drinks">
            {drinks.map((drink)=> (
            
                <div key={drink.idDrink}>
                    <h2>{drink.strDrink}</h2>
                    <p>{drink.strCategory}</p>
                    <img src={drink.strDrinkThumb} alt="#"/>
                    <ul className='ingredients'>
                    <p>{drink.strIngredient1} {drink.strMeasure1}</p>
                    <p>{drink.strIngredient2} {drink.strMeasure2}</p>
                    <p>{drink.strIngredient3} {drink.strMeasure3}</p>
                    <p>{drink.strIngredient4} {drink.strMeasure4}</p>
                    <p>{drink.strIngredient5} {drink.strMeasure5}</p>
                    <p>{drink.strIngredient6} {drink.strMeasure6}</p>
                    <p>{drink.strIngredient7} {drink.strMeasure7}</p>
                    <p>{drink.strIngredient8} {drink.strMeasure8}</p>
                    <p>{drink.strIngredient9} {drink.strMeasure9}</p>
                    <p>{drink.strIngredient10} {drink.strMeasure10}</p>
                    <p>{drink.strIngredient11} {drink.strMeasure11}</p>
                    <p>{drink.strIngredient12} {drink.strMeasure12}</p>
                    <p>{drink.strIngredient13} {drink.strMeasure13}</p>
                    <p>{drink.strIngredient14} {drink.strMeasure14}</p>
                    <p>{drink.strIngredient15} {drink.strMeasure15}</p>
                    </ul>
                    <p>{drink.strInstructions}</p>
                     <Link to={drink.strVideo} className="video" alt="#">
                    
                    </Link>
                    <button onClick={setDrinks}>Get Another</button>


                </div>
            ))}
 
            
            
            
        </div>  
        
        
)}
    

}

