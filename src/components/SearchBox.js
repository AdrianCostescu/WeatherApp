import React from 'react'
import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = ({search, city, setCity, click, setClick, setSearch}) => {

    const submitHandler = (e) => {
        if (e.key === 'Enter'){
          setClick(true)
          console.log(click)
        } 
      }  

      const clickHandler = () => {
        if(search){
          setSearch(false)
        } else {
          setSearch(true)
        }
      }

    return (
        <div className='serch-box'>
            { search && <input
            className="search-bar"
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}  
            placeholder="Cautare.."
            onKeyPress={submitHandler}
            />}
            <div className='search-icon' onClick={clickHandler}>
              <FontAwesomeIcon icon={faSearch} size="2x"/>
            </div>
        </div>
    )
}

export default SearchBox
