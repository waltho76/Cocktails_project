import React, { useState, useEffect } from "react";
import "./Modal.css";
import axios from "axios";
// import { useParams } from "react-router-dom"

export default function Modal({drink}) {
    const [modal, setModal] = useState(false);
    // const [drink, setDrinks] = useState(null) 
    // let { id } = useParams()
    const toggleModal = () => {
    setModal(!modal);
  };

//   let navigate = useNavigate()

// const imgCard =(drink) => {
//     navigate(`/drinks/${drink.strDrink}`)
// }

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
            
  //           setDrinks(response.data.drinks)  
  //   }
  //   getData()
  //   }, [])

console.log(drink)


if (!drink) {
  return <h2> Loading Page </h2>
} else{

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
            
                
                    <div  
                        key={drink.idDrink}
                        className="modalCard" >
                        <h2>{drink.strDrink}</h2>
                    
                        <img  className="img-thumb" src={drink.strDrinkThumb} alt="#"/>
                       
                        <ul className='ingredientsm'>
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
                        <p className="instructions_p">{drink.strInstructions}</p>
                        <p></p>
                    <button className="close-modal" onClick={toggleModal}>
                      X
                    </button>
                </div>
            
              </div> 
              </div> 

            
          </div>
        </div>
      )}
    </> 
    
  );
}
}