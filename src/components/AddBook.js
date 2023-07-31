import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { gql, useMutation } from '@apollo/client';

const listAllBooks = gql`
  query {
    books {
        title
        genres
        price
    }
  }
`

const ADD_NEW_BOOK = gql`
  mutation AddNewBook($title: String!, $genres: String!, $price: Int!) {
    addBook(addBookArgs: { title: $title, genres: $genres, price: $price })
  }
`

const AddBook = () => {
    const [newBookData, { loading, error }] = useMutation(ADD_NEW_BOOK);
  const submitBook = (e) => {
    e.preventDefault()
    newBookData({
      variables: {
        title: bookTitle,
        genres: bookGenres,
        price: bookPrice
      },
      refetchQueries: [{
        query: listAllBooks
      }]
    })
  }

  const [bookTitle, setBookTitle] = useState('')
  const [bookGenres, setBookGenre] = useState('')
  const [bookPrice, setBookPrice] = useState(0)

  

  if (loading) return <p className='loading'>Submitting your book...</p>
  if (error) return <p className='error'>Cannot add your book!: ${error.message}</p>

  return ( 
    <div className='addBook' id="addNewBook">
      <form onSubmit={submitBook}>
        <input type="text" placeholder='Book Name' required onChange={(e) => setBookTitle(e.target.value)}/>
        <input type="text" placeholder='Book Genre' required onChange={(e) => setBookGenre(e.target.value)}/>
        <input type="number" placeholder='Book Price' onChange={(e) => setBookPrice(234)}/>
        <button>Add Book</button>
      </form>
      <div className='top'>
        <Link smooth to="#header" className='top-button'>Back to top</Link>
      </div>
    </div>
   );
}
 
export default AddBook;