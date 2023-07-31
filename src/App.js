import React from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Footer from './components/Footer';
import Header from './components/Header';
import Books from './containers/Books';
function App() {
  return (
    <>
    <Header/>
    <Books/>
    <AddBook/>
    <Footer/>
  </>
  );
}

export default App;
