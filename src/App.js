import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import Article from './components/article/Article';
import CategoryPage from './components/categoryPage/CategoryPage';
import Footer from './components/footer/Footer';
import About from './components/footer/About';
import Contact from './components/footer/Contact';
import PageNotFound from './components/pageNotFound/PageNotFound';
import './css/main.css';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
          <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/article" exact element={<Article />} />
              <Route path="/category" exact element={<CategoryPage />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="*" exact element={<PageNotFound />} />
          </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
