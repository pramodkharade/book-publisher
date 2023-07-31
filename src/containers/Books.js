import React from 'react';
import { gql, useQuery } from '@apollo/client';
import SingleBook from '../components/SingleBook';

const listAllBooks = gql`
  query {
    books {
      title
      genres
      price
    }
  }
`

const Books = () => {
  const { loading, error, data } = useQuery(listAllBooks)

  if (loading) return <p className='loading'>We are loading your books...</p>
  if (error) return <p className='error'>Cannot fetch your books! : {error.message}</p>
  if(data.books.length === 0) return <p className='no-books'>Please add some books first</p>

  return ( 
    <div className='books'>
      {data.books.map((book, index) => {
        return <SingleBook
          key={index}
          bookTitle={book.title}
          bookGenres={book.genres}
          bookPrice={book.price}
        />
      })}
    </div>
   );
}
 
export default Books;