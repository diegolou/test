const OPENLIBRARY = "https://openlibrary.org/api/books?&bibkeys=OLID:";
const FORMATJSON = "&jscmd=data&format=json";


export async function getBookInfo (id) {
  return await fetch (`${OPENLIBRARY}${id}${FORMATJSON}`)
    .then ((response) => response.json())
    .then ((json) => {
      
      if (json){
        
        let author = '';
        let description = '';
        let published = '';
        let title = '';
        const olid = "OLID:" + id;
        if (!json[olid]){
        
          return ({
            fail : true
          })
        } else {
          const book = json[olid];
          
          if (book.authors) {
            book.authors.forEach(res => {
              author = author.concat(res.name + ' '); 
            })
            
          }
          if (book.publish_date)
            published = book.publish_date.substring(book.publish_date.length-4)
          if (book.subjects){
            book.subjects.forEach(res => {
              description = description.concat(res.name + ' ') ;
            })
          }
          if (book.title)
            title = book.title 
          
          return ({
            id:"",
            date: Date.now().toString(),
            olid: id,
            author: author,
            description:description,
            published: published,
            title: title
          })
        }
      }  
    })
}

export function addList (list, element) {
  
  list.push(element)
  
  return list  
}
