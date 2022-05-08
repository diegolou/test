import React, { Fragment, useEffect} from 'react'

import BookRowComponent from './BookRowComponent';
import AddBook from './AddBook';
import '../css/BookList.css';

function ListBooks({ db, setDb, sortOrder, setSortOrder }) {

  const listComponents = db.map((res) => {
    return <BookRowComponent key={res.id} book={res} id={res.id} />;
  });

  const orderList = (order) => {
    setDb([...db].sort((a, b) => {
      let sortOrderList = 1;
      let key = order;
      if (key[0] === "-") {
        sortOrderList = -1;
        key = key.substring(1);
      }

      const comparison = (a[key] >= b[key]) ? 1 : -1;
      const result = comparison * sortOrderList;
      return result;
    }));
  };
  const handleOnChangeSelect = (event) => {

    setSortOrder(event.target.value);
    orderList(event.target.value);

  };

  useEffect(() => {

    orderList(sortOrder);
  }, [db.length]);

  return (
    <Fragment>
      <section>
        <div>
          <AddBook db={db} setDb={setDb} />
        </div>
        {
          db.length > 1 && 
          <div className='sort'>
            <label className='sort_label'>Sort Order</label>
                       
            <select className='order_Select'
              value={sortOrder}
              onChange={handleOnChangeSelect}>
              <option value="date">Order added</option>
              <option value="title">title descending</option>
              <option value="-title">title ascending</option>
            </select>
          </div>
          
        }

        <ul className='m-1 p-1 book_list'>
          {db.length ? listComponents : <h5 className='text-center'>There is no books to show</h5>}
        </ul>
      </section>
    </Fragment>
  );
}

export default ListBooks