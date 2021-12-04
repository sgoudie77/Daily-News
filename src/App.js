import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/main/Main';
import Article from './components/article/Article';
import CategoryPage from './components/categoryPage/CategoryPage';
import Footer from './components/footer/Footer';
import PageNotFound from './components/pageNotFound/PageNotFound';
import './css/main.css';

function App() {

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
