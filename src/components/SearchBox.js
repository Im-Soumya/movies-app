import React from 'react'
import "../App.css"

const SearchBox = (props) => {
  return (
    <div className='col col-sm-4'>
      <input 
        className='form-control'
        placeholder="Type to search"
        onChange={props.Change}
      />
    </div>
  )
}

export default SearchBox
