import React from 'react'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='category'>
      <div>
        <input type="text" placeholder='enter meal categoty'/>
        <button>Search by category</button>
      </div>
    </div>
  )
}

export default Categories