import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Categories from './components/Categories/Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
