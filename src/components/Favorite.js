import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Favorite.css'
const Favorite = ({favorite, city, setCity, setClick}) => {

    const favoriteHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/data', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({title: city})
        }).then(()=>{
          console.log(city);
          console.log('Successfully added!');
        }).then(() => {
          window.location.reload(false);
        })
      }

    const handleFav  = (title) => {
        setCity(title);
        setClick(true)
    }

    const DeleteHandler = (id) => {
        fetch('http://localhost:8000/data/' + id, {
          method: 'DELETE'
        }).then(() => {
          console.log('Successfully deleted!')
        }).then(() => {
          window.location.reload(false);
        })
      }

    return (
        <div>
            <div className='fav-p'>
                <p>Favorite location<span className='plus' onClick={favoriteHandler}>+</span></p>
            </div>

            <div className='fav' >
                {favorite && favorite.map((fav) => (
                    <div className='fav-map' key={fav.id} onClick={() => handleFav(fav.title)}>
                    {fav.title}
                    <span className='delete-icon' onClick={() => {DeleteHandler(fav.id)}}>
                        <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
                    </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorite
