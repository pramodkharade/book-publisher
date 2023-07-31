import React from 'react';

const Footer = () => {
  return ( 
    <div className='footer'>
      <p>Copyright &copy; Book Publisher {new Date().getFullYear()}</p>
    </div>
   );
}
 
export default Footer;