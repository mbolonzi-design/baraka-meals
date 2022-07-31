import React, { useContext, useEffect } from 'react'
import './RandomMeal.scss'
import {myContext} from '../Context/Context'

const RandomMeal = () =>{
  const {randomMeal, generateRandomMeal} = useContext(myContext)

  useEffect(() => {
    generateRandomMeal();
  }, [generateRandomMeal])
  return (
    <div className='random'>
      {randomMeal.map((meal) => (
        <div className='random-meals' key={meal.idMeal}>
          <div className='meal-grid'>
            <img src={meal.strMealThumb} alt="#" />
            <button onClick={generateRandomMeal}>Generate New Meal</button>
          </div>
          <div className='meal-instructions'>
            <h3>Instructions</h3>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RandomMeal