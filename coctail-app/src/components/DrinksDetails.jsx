import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DrinkDetails = (props) => {

    let { id } = useParams()

  const [drink, setDrink] = useState('')

     useEffect(() => {
    let selectedDrink = props.drinks.find((drink) => drink.id === parseInt(id)
    )
    setDrink(selectedDrink)
  }, [props.drink, id])

  return drink ? (
    <div className="detail">
      <div className="detail-header">
        <img src={drink.img} alt={drink.name} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{drink.name}</h1>
        </div> 
      </div>
      
    </div>
  ) : null;
}

export default DrinkDetails
