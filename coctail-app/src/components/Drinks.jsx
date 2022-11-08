import { useState, useEffect } from "react"
import axios from 'axios'
// import SearchForm from "./SearchForm"

export default function Drinks () {
        
// we need to create a state for our data
const [drinks, setDrinks] = useState(null)
const [filteredResults, setFilteredResults] = useState([]);
//const [searchInput, setSearchInput] = useState("")

//we need to call an axios function
    useEffect(() => {
        const getData = async () => {
          const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
                // console.log(response.data.drinks)
                .then((response) => {
                setDrinks(response.data.drinks)  
        //         selectedDrink()  
        //         setSelectedDrink(true)
        })
        }
        getData()
    }, [])
   
    // Create a route for /search/:name
    // create a searchbar in your nav or in a searchbar component
    // have it link to /search/${e.target.value}
    // e.target.value being the value of the search bar
    // Then in a searchresult component
    // api call = apicall/${params}
    // const searchItems = (searchValue) => {
    //     setSearchInput(searchValue)
    //     if (searchInput !== '') {
    //         const filteredData = drinks.filter((item) => {
    //             return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    //         })
    //         setFilteredResults(filteredData)
    //     } else{
    //         setFilteredResults(drinks)
    //     }
    // }
   
    
    
    
 
// const [selectedDrink, setSelectedDrink] = useState(null)


//we need to set state of our data

//we need to see the data
// console.log(drinks)

if (!drinks) {
    return <h2> Loading Page </h2>
} else{
    return (
        <div className="container">
        <div className="drinks">
            
            {/* <input type="text" 
                placeholder="search for your cocktail" 
                id="inputBar" 
                value="" 
                onChange={searchItems}>
            </input>
            <button className="searchButton">
                <input type='button'
                    placeholder='Search...'
                    onClick={searchItems} 
                    id="searchButton" 
                    value="search"/>
            </button> */}
            <div className="searchResults">
                {drinks.map((drink)=> (
                    <div onClick={() => filteredResults(drink)} 
                        key={drink.idDrink}
                        className="previewCards">
                        <h2>{drink.strDrink}</h2>
                        <p>{drink.strCategory}</p>
                        <img src={drink.strDrinkThumb} alt="#"/>
                        
                        {/* <ul className='ingredients'>
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
                        <p>{drink.strInstructions}</p> */}
                    </div>
                ))}
            </div>
        </div> 
        </div>       
            )}
         
    }


