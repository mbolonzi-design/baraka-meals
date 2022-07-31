import React, {useEffect, useContext} from 'react'
import './Categories.scss'
import { myContext } from '../Context/Context'

const Categories = () => {

  const {fetchCategories, categories} = useContext(myContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories])

  return (
    <div className='categories'>
      {categories.map((category)=> (
        <div key={category.idCategory}>
          <img src={category.strCategoryThumb} alt="#" />
          <h3>{category.strCategory}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories