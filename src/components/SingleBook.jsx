import { Card, Col, Button } from 'react-bootstrap'
import './SingleBook.css'
import { useContext, Link } from "react";
import { BookContext } from './BookContextProvider';
import { useNavigate } from 'react-router-dom';

function SingleBook({ book }) {
    const [selectedBook, setSelectedBook] = useContext(BookContext)
    const nav = useNavigate()
    const goToBookDetails = function(){
        
        // uso il localstorage per passare gli altri dati del libro alla pagina di dettaglio.
        localStorage.setItem("selBook", JSON.stringify(book))
        // poi cambio pagina
        nav(`/BooksDetails/${book.asin}`)
    }
    
    return (
        <Col lg={4} md={6} sm={12} className='myCol' >
            <Card data-testid="singleBook" className={book.asin === selectedBook && 'selected'}
                onClick={() => book.asin === selectedBook ? setSelectedBook(null) : setSelectedBook(book.asin)}
                >
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
                            <Button
                                as={Link}
                                // questa non funziona perchè l'on-click sulla card ha priorità rispetto alla navigazione.
                                // cioè il to del button
                                // to={`/BooksDetails/${book.asin}`}
                                onClick={goToBookDetails}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
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