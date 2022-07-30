import React, {createContext, useState} from "react";

export const myContext = createContext()








export const AppContext = ({children}) => {

    const [meals, setMeals] = useState([])
    const [categories, setCategories] = useState([])
    const [randomMeal, setRandomMeal] = useState([])

    
    
    return <myContext.Provider>
        {children}
    </myContext.Provider>
}
