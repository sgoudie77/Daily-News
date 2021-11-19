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
  
  const [contentDisplay, setContentDisplay] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=762ee7ce30574708912795f369bd7947')
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setContentDisplay(data);
      })
  },[])

  return (
    <div className="App">
      <Header />
      <Router>
          <Routes>
              <Route path="/" exact element={<Main contentDisplay={contentDisplay} />} />
              <Route path="/article" exact element={<Article contentDisplay={contentDisplay} />} />
              <Route path="/category" exact element={<CategoryPage contentDisplay={contentDisplay} />} />
              <Route path="*" exact element={<PageNotFound contentDisplay={contentDisplay} />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
