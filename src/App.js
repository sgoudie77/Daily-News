import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Article from './components/Article';
import CategoryPage from './components/CategoryPage';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import './css/main.css';

function App() {
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=762ee7ce30574708912795f369bd7947')
      .then((response) => response.json())
  })

  return (
    <div className="App">
      <Header />
      <Router>
          <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/article" exact element={<Article />} />
              <Route path="/category" exact element={<CategoryPage />} />
              <Route path="*" exact element={<PageNotFound />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
