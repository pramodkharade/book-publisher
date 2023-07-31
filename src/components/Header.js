import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return ( 
    <div className='topnav' id="header">
      <a href="/#">Book Publsiher</a>
      <Link smooth to='#addNewBook' className='add-button'>Add Book</Link>
    </div>
   );
}
 
export default Header;