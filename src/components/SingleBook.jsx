import { Card, Col, Button } from 'react-bootstrap'
import './SingleBook.css'
import {useContext} from "react";
import { BookContext } from './BookContextProvider';

function SingleBook({ book }) {
    const [selectedBook, setSelectedBook] = useContext(BookContext)
    
    return (
        <Col lg={4} md={6} sm={12} className='myCol' >
            <Card className={ book.asin === selectedBook &&'selected'}
                    onClick={() => book.asin === selectedBook ? setSelectedBook(null) : setSelectedBook(book.asin)}>
                <div className='imgWrapper'>
                    <Card.Img variant="top" src={book.img} />
                </div>
                <Card.Body>
                    <hr></hr>
                    <Card.Title>{book.title}</Card.Title>
                    <div className='cardBottom'>
                        <div className='btnWrapper'>
                            <Button variant='success' type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>
                            </Button>
                        </div>
                        <Card.Text>
                            Price: {book.price} €
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleBook;