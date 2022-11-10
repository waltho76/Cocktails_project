import React from "react";
import axios from "axios";
import { useState } from "react";

function Search() {
    const [formState, setFormState] = useState(null)
    const [searchResults, setSearch] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
      };

    const handleChange = (event)=> {
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }


const getSearch = async () => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${formState['']}`)
   
        console.log(response.data.drinks)
        setSearch(response.data.drinks)
    }



return (
    <div className="Search">
      <form id="input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by drink name"
          
          onChange={handleChange}
        />
        <button
            type="button"
            onClick={getSearch}
            id="searchButton"
            
          >Search
        </button>
      </form>
     
      <div className="container">
      
        {searchResults?.map((drink) => (
          <div key={drink.strDrink} className="card">
            <h2>{drink.strDrink} </h2>
                    <p>{drink.strCategory}</p>
                    <img className="srcthum" src={drink.strDrinkThumb} alt="#"/>
                    <div className='ingredients'>
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
                    </div>
                    <div className="instructions">
                    <p>{drink.strInstructions}</p>
                    </div>
                
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search


