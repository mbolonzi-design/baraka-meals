import React, {useState, useEffect} from 'react'
import './Home.scss'
import { myContext } from '../Context/Context'

const Home = () => {
    const [searchMeal, setSearchMeal] = useState("")

    console.log(searchMeal)
  return (
    <div className='home'>
        <div className='search-meal'>
            <input 
                type="text" 
                placeholder='Enter meal name....'
                value={searchMeal}
                onChange={(e) => setSearchMeal(e.target.value)}
             />
            <button>Search Meal</button>
        </div>
        <div className='search-result'>
            
        </div>
    </div>
  )
}

export default Home