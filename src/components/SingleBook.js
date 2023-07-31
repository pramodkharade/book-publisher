import React from 'react';

const SingleBook = (props) => {
  return ( 
    <div className='card'>
      <div className='container'>
        <h2>{props.bookTitle}</h2>
        <h4>{props.bookGenres} - Rs.{props.bookPrice}</h4>
      </div>
    </div>
   );
}
 
export default SingleBook;