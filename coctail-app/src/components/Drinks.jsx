import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Modal from "./Modal"

export default function Drinks () {
        
// we need to create a state for our data
const [drinks, setDrinks] = useState(null)
const [openModal, toggleModal] = useState(false)
// let navigate = useNavigate()

// const imgCard =(drink) => {
//     navigate(`/drinks/${drink.strDrink}`)
// }
//we need to call an axios function
    useEffect(() => {
        const getData = async () => {
          const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
                // console.log(response.data.drinks)
                // .then((response) => {
                setDrinks(response.data.drinks)  
        //         selectedDrink()  
        //         setSelectedDrink(true)
        // })
        
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
                <div 
                    key={drink.idDrink}
                    className="previewCards">
                    
                    <img onClick={toggleModal} className="img-thumb" src={drink.strDrinkThumb} alt="#"/>
                    {openModal && <Modal drink={drink} />}
                    <h2>{drink.strDrink}</h2>
                    <p>{drink.strCategory}</p>
                    
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
            )}
         
    }


