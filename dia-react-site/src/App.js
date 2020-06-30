import React, { Component } from 'react';


import OrderedList from './components/OrderedList';
import Note from './components/Note';
import Book from './components/Book';
import UdemyMainMenu from "./components/UdemyMainMenu"

class App extends Component {
  render() {
    return (
      <div>
        <Note/>
        <OrderedList/>
        <Book/>
        <UdemyMainMenu/>
      </div>
      
      );
  }
}

export default App;
