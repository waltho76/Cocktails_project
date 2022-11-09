import React, { useState, useEffect } from "react";
import "./Modal.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom"

export default function Modal() {
    const [modal, setModal] = useState(false);
    const [drinks, setDrinks] = useState(null) 
    const toggleModal = () => {
    setModal(!modal);
  };

//   let navigate = useNavigate()

// const imgCard =(drink) => {
//     navigate(`/drinks/${drink.strDrink}`)
// }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
            
            setDrinks(response.data.drinks)  
    }
    getData()
    }, [])

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
        <button onClick={toggleModal} className="btn-modal">
            Open
        </button>

      {modal && (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <div className="container">
                <div className="drinks">
            
                {drinks.map((drink)=> (
                    <div  
                        key={drink.idDrink}
                        className="modalCard" >
                        <h2>{drink.strDrink}</h2>
                    
                        <img  className="img-thumb" src={drink.strDrinkThumb} alt="#"/>
                       
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
        </div> 

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p></p>
    </>
  );
}
