import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Search() {
    const [formState, setFormState] = useState("")
    const [search, setSearch] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
      };

    const handleChange = (event)=> {
        setFormState({...formState, [event.target.id]: event.target.value})
    }


const getSearch = async () => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${formState[""]}`)
   
        // console.log(response.data.drinks[0])
        setSearch(response.data.drinks)
    }



return (
    <div className="Search">
      <form id="input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by drink name"
          value={formState.subject}
          onChange={handleChange}
        />
        <button
            type="button"
            onClick={getSearch}
            id="searchButton"
            value="Click here"
          >Search
        </button>
      </form>
     
      {/* <div className="grid">

        {search.map((drinks) => (
          <div key={drinks.strDrink} className="card">
            <h3>{drinks.strDrink} </h3>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Search


