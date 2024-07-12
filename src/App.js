import { useState } from 'react';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import CommentArea from './components/comments/CommentArea';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welocme from './components/Welcome';
import { BookContext } from './components/BookContextProvider';
import { Row } from 'react-bootstrap';

function App() {
  
  const [selectedGenre, setSelectedGenre] = useState('Fantasy')
  const [searchInput, setSearchInput] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)
  return (
    <>
      <BookContext.Provider value={[selectedBook, setSelectedBook]}>
        <MyNav selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}
                searchInput={searchInput} setSearchInput={setSearchInput}
        ></MyNav>
        <Welocme></Welocme>
        <Row className='contentWrapper'>
          <div className='col-8'><AllTheBooks selectedGenre={selectedGenre} searchInput={searchInput}></AllTheBooks></div>
          <div className='col-4'><CommentArea></CommentArea></div>
        </Row>
        <MyFooter></MyFooter>
      </BookContext.Provider>
    </>
  );
}

export default App;
