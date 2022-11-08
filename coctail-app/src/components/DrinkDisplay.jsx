import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function DrinkDisplay () {

    
    let navigate = useNavigate()

    const showDrinkDisplay = (drink) => {
        navigate(`${drink.strIngredient1}`)
    }

    const [drinkDisplay, setDrinkDisplay] = useState(null)

    useEffect(() => {
        const getData = async () => {
          const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
          `)
           
        // console.log(response.data.drinks[0])
        setDrinkDisplay(response.data.drinks)
    }
    
    getData()
       
},[])

if (!drinkDisplay) {
    return <h2> Loading Info </h2>
} else{
     return (
        <div className="drinkinfo">
            
            {drinkDisplay.map((drink)=> (
            
                <div onClick={() => showDrinkDisplay(drink)}
                        key={drink.idDrink} className="fuldrinkinfo">
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
                   
                    
                </div>
            ))}
        </div>  
)}
}


