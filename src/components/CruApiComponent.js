import React, { useState } from 'react'
import UpdateComponent from './UpdateComponent'; 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ListBooks from './ListBooks';

const CruApiComponent = () => {
  const [db, setDb] = useState([]);
  const [sortOrder, setSortOrder] = useState("date");
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListBooks db={db} setDb={setDb} sortOrder={sortOrder} setSortOrder={setSortOrder} />}></Route>
        <Route path="/update/:id" element={<UpdateComponent db={db} setDb={setDb}/>}></Route>
        <Route path="*" element={<h1>opss...</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default CruApiComponent