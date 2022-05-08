import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const bookInit = {
  
  id:"", 
  title:"", 
  author:"", 
  description:"", 
  published:"" ,
  olid:""
}

const UpdateComponent = ({db, setDb}) => {

  const [form, setForm] = useState (bookInit)
  let params = useParams();
  let navigate = useNavigate()   
    
  const handleInputChange = (event) => {
    
    setForm ({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const getBook = (id) => {
    let book = null;
    if (id) {
      book = db.find((res) => res.id === id)
      return book
    }
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const upBook = db.map ((el) => {
      if (el.id === form.id){
        const updatedItem = {
          ...form, olid: form.olid, author : form.author, description:form.description, title : form.title
        }
        return updatedItem
      }
      return el
      });
    setDb (upBook);
    navigate ("/");
  }

  const handleCancel = () => {
    navigate("/");
  }

  

  if (!form.id) {
    const book =getBook(params.id)
    if (book)
      setForm(book);
    else {
      return (
        <div>
          <p>Opps The Book Id your trying to reach does not exists</p>
          <div className='mx-auto'>
            <button className='btn btn-outline-dark' onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )
      
    } 

  }
    
  

  return (
    <div>
      <h1 className='text-center p-4'>EDIT BOOK</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3 row'>
          <label htmlFor='olid' className='col-sm-2 col-form-label'>ID</label>
            <div className='col md-8'>
              <input type="text" readOnly className='form-control-plaintext' id='olid' value={form.olid} /> 
            </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='title' className='col-sm-2 col-form-label'>Title</label>
            <div className='col md-8'> 
              <input type="text" className='form-control' id='title' name='title' onChange={handleInputChange}  value={form.title} /> 
            </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='author' className='col-sm-2 col-form-label'>Author</label>
            <div className='col md-8'>
              <input type="text" className='form-control' id='author' name='author' onChange={handleInputChange}  value={form.author}/> 
            </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='published' className='col-sm-2 col-form-label'>Published</label>
            <div className='col md-8'>
              <input type="text" className='form-control' id='published' name='published' onChange={handleInputChange}  value={form.published}/> 
            </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='description' className='col-sm-2 col-form-label'>Descrition</label>  
          <textarea className='form-control' id='description'name='description' rows="3"  onChange={handleInputChange}  value={form.description} />  
        </div>
        <div className='mb-3 row'>
          <div className='d-grid gap-2 col-6 mx-auto'>
              <button type="submit" className='btn btn-outline-dark'>Save</button>
          </div> 
          <div className='d-grid gap-2 col-6 mx-auto'>
            <button className='btn btn-outline-dark' onClick={handleCancel}>Cancel</button>
          </div>
            
        </div>
      </form>
    </div>
  )
}

export default UpdateComponent