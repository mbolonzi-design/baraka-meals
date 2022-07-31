import React, {useState, useCallback, useContext} from 'react'
import './Home.scss'
import { myContext } from '../Context/Context'

const Home = () => {
    const [searchMeal, setSearchMeal] = useState("")

    const {fetchMeals, meals} = useContext(myContext)

    const mealsHandler = useCallback(() => {
      fetchMeals(searchMeal);
    },[searchMeal, fetchMeals]);

    // console.log(searchMeal)
  return (
    <div className='home'>
        <div className='search-meal'>
            <input 
                type="text" 
                placeholder='Enter meal name....'
                value={searchMeal}
                onChange={(e) => setSearchMeal(e.target.value)}
             />
            <button onClick={mealsHandler}>Search Meal</button>
        </div>
        <div className='greetings'>
          <h2>Welcome to Baraka Meals</h2>
          <p>Home of finger-licking cuisine</p>
        </div>
        <div className='search-result'>
            {meals ? (
              meals.map((meal) => (
                <div className='meal-result' key={meal.idMeal}>
                  <img src={meal.strMealThumb} alt="#" />
                  <h3>{meal.strMeal}</h3>
                </div>
              ))
            ) :(
              <h3>No match! Try a different meal..</h3>
            )}
        </div>
    </div>
  );
}

export default Home