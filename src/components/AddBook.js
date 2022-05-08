import React , { Fragment,  useState} from 'react'
import BookRowComponent from './BookRowComponent';
import NewIdBook from './NewIdBook';
import SearchComponent from './SearchComponent';

const bookInit = {
  id:"", 
  title:"", 
  author:"", 
  description:"", 
  published:"" ,
  olid:""
}

const AddBook = ({db, setDb}) => {

  const [book, setBook] = useState(bookInit); 
  const [isBook, setIsBook] = useState (false);
  
  if (!isBook){
    
    return (
      <Fragment>       
        <div className="margin">
          <h1 className='text-center pt-4'>BOOK MANAGER</h1> 
        </div>
        <div className='row'>
          <label>Add a book by Open Library ID Number</label>
        </div>
        <SearchComponent db={db} setDb={setDb} book={book} setBook={setBook} isBook={isBook} setIsBook={setIsBook}/>     
      </Fragment>
    )
  }
  else {
    
    return (
      <Fragment>       
        <div className="margin">
          <h1>BOOK MANAGER</h1>  
        </div>
        <p>The book you search is the following:</p>
        <BookRowComponent book={book}/>
        <label>Please enter the Id to identificate this book</label>
        <NewIdBook db={db} setDb={setDb} book={book} setBook={setBook} isBook={isBook} setIsBook={setIsBook} />
        
       </Fragment>
    )
  }
  
    
}

export default AddBook