import './BookDetails.css'
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CommentArea from '../components/comments/CommentArea';
import { BookContext } from '../components/BookContextProvider';
import { useContext } from 'react';

function BookDetails() {
    const { asin } = useParams()
    const book = JSON.parse(localStorage.getItem("selBook"))
    const [selectedBook, setSelectedBook] = useContext(BookContext)
    setSelectedBook(book.asin)
    return (
        <Container>
            <Row>
                <Col sm={12} md={8}>
                    <div className="bookWrapper">
                        {/* <div className="bdImgWrapper"> */}
                        <img src={book.img} alt={book.title} />
                        {/* </div> */}
                        <div className='detailsWrapper'>
                            <div className="otherDetails">
                                <h4>{book.title}</h4>
                                <hr></hr>
                                <p>{book.category.toUpperCase()} BOOKS</p>
                                <p id='brief'>Brief Description</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus similique impedit ab. Error, vel libero impedit quisquam aliquam dolorum accusantium eaque, sequi rem vero, tempore rerum earum ab! Voluptas, esse?</p>
                                <p id='price'>Price: {book.price}$</p>
                            </div>
                            <div className='bdButtonWrapper'>
                                <Button
                                    as={Link}
                                    to={'/'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookshelf" viewBox="0 0 16 16">
                                        <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5M3 14h10v-3H3zm0-4h10V7H3zm0-4h10V3H3z" />
                                    </svg>
                                </Button>
                                <Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <CommentArea></CommentArea>
                </Col>
            </Row>
        </Container>
    );
}

export default BookDetails;