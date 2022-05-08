import {useState} from 'react'

import { getBookInfo } from '../services/requestServices';

export const useForm = (initialForm, validateForm, db, setDb, book, setBook, setIsBook) => {
  const [form, setForm] = useState (initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState (null);
  
  const handleChange = (e) => {
    const {name, value} = e.target

    setForm({
      ...form,
      [name] : value 
    })
  }
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form))
  }
  const handleSubmitSearchBook =  (e)  => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0){
      setLoading(true);
       getBookInfo (form.id)
      .then(res => {
        if (!res.fail)  {
          setBook (res);
          setIsBook (true);
          setResponse (false);
        } else {
          setResponse ("Book does not exist in Open Library")
        }
        setLoading(false);
        setForm(initialForm);          
        
      })
    }else {
      return
    }
  }

  const handleSubmitNewIdBook = (e) => {
    
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0){
      if (!db.find(res => (res.id === form.id))){ 
        setDb ([...db, {...book, id: form.id}])
        setIsBook (false);
        setResponse (false);
        setLoading(true);
      } else {
        setResponse ("Id already Exists...")
      }
      
      
    }
  }
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmitSearchBook,
    handleSubmitNewIdBook
  }
}
