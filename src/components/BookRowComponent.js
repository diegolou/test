import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/BookList.css';


const BookRowComponent = (props) => {

  let navigate = useNavigate();

  const handleOnClick = () => {
    
    navigate(`/update/${props.book.id}`)
  }  
  return (
    <li className='list-group-item list_order' onClick={handleOnClick} >

          <div className='row'>
            <div className='col-6'>
              <h6 className='card-title'>{props.book.title} </h6>

            </div>
            <div className='col-3'>
              <h6 className='card-subtitle'>({props.book.published})</h6>
            </div>
            <div className='col-3'>
              <p className='card-text'>{props.book.author}</p>
            </div> 
          </div>
          <p className='card-text'>{props.book.description}</p>
      
    </li>      
    
    
  )
}

export default BookRowComponent 