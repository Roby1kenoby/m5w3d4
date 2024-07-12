import { Row } from 'react-bootstrap'
import './AllTheBooks.css'

import fantasy from '../data/fantasy.json'
import { useState, useEffect } from 'react'
import SingleBook from './SingleBook'

function AllTheBooks({ selectedGenre, searchInput }) {
    let books = fantasy
    const [filteredBooks, setFilteredBooks] = useState(books)

    const filterBooks = () => {
        let tempFilterValue = searchInput
        let tempBooks = books.filter(b => {
            return b.title.toLowerCase().includes(tempFilterValue.toLowerCase()) && b
        })
        // infine, setto l'array filteredBooks con l'array che contiene i valori filtrati
        setFilteredBooks(tempBooks)
    }

    useEffect(filterBooks, [searchInput])

    return (
        <Row>
            {filteredBooks.map(b => <SingleBook key={b.asin} book={b}></SingleBook>)}
        </Row>

    );

}

export default AllTheBooks;