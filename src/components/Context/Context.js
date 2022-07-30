import React, {createContext, useCallback, useState} from "react";
import axios from "axios";

export const myContext = createContext()


export const AppContext = ({children}) => {

    const [meals, setMeals] = useState([])
    const [categories, setCategories] = useState([])
    const [randomMeal, setRandomMeal] = useState([])

    const fetchMeals = useCallback((searchMeal) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
        .then((response) =>{
            // console.log(r.data.meals)
            setMeals(response.data.meals)
        })
    },[])

    return <myContext.Provider value={{fetchMeals, meals}}>
        {children}
    </myContext.Provider>
}
