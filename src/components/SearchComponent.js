import React , { Fragment} from 'react'
import { useForm } from '../hooks/useForm'
import '../css/BookList.css';


const validationsForm = (form) => {
  let errors = {};
  let regExId = /^[A-Za-z0-9]+$/; 

  if (!form.id.trim()){
    errors.id = 'The id is requerid'
  }else if (!regExId.test(form.id.trim()))
    errors.id = 'Id only accepts letters y number'

  return errors
}

const SearchComponent = ({db, setDb, book, setBook, setIsBook}) => {

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmitSearchBook
   } = useForm({id:''}, validationsForm, db,setDb, book, setBook, setIsBook);

  return (
    <Fragment>       
      
      <form onSubmit={handleSubmitSearchBook} >
        <div className='row p-3'>
          <div className='d-grid col-9 mx-auto'>
            <input type="text" className='form-control' name='id' onChange={handleChange} onBlur={handleBlur} value={form.id} required/> 
          </div> 
          <div className='d-grid gap-2 col-3 mx-auto '> 
            <button
              className='btn btn-outline-dark'
              type='submit'
              
            >Add</button>
          </div>
          <div>
            {errors.id && <p>{errors.id}</p>}
          </div>
        </div>
      </form>
      <div className='error'>
        {response && <p>{response}</p>}
      </div>
      {loading && <p>Searching....</p>}
    </Fragment>
  )
}

export default SearchComponent