import { useState } from 'react';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import CommentArea from './components/comments/CommentArea';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welocme from './components/Welcome';
import { BookContext } from './components/BookContextProvider';
import { Row } from 'react-bootstrap';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';

function App() {
  
  const [selectedGenre, setSelectedGenre] = useState('Fantasy')
  const [searchInput, setSearchInput] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)
  return (
    <BrowserRouter>
      <BookContext.Provider value={[selectedBook, setSelectedBook]}>
        <MyNav selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}
                searchInput={searchInput} setSearchInput={setSearchInput}
        ></MyNav>
        
          <Routes>
            <Route
              path="/" element = {
                <>
                  <Welocme></Welocme>
                  <Row className='contentWrapper'>
                    <div className='col-8'><AllTheBooks selectedGenre={selectedGenre} searchInput={searchInput}></AllTheBooks></div>
                    <div className='col-4'><CommentArea></CommentArea></div>
                    </Row>
                </>
              }/>
              <Route
                path="/BooksDetails/:asin"
                element = {
                  <BookDetails></BookDetails>
              }/>
              <Route path="/*" element={<NotFound/>} />
          </Routes>
        <MyFooter></MyFooter>
      </BookContext.Provider>
    </BrowserRouter>
  );
}

export default App;
