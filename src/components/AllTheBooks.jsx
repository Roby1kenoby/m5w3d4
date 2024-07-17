import { Row } from 'react-bootstrap'
import './AllTheBooks.css'

import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'

import { useState, useEffect } from 'react'
import SingleBook from './SingleBook'
import { useFetcher } from 'react-router-dom'

function AllTheBooks({ selectedGenre, searchInput }) {
    const [books, setBooks] = useState(fantasy)
    const [filteredBooks, setFilteredBooks] = useState(books)

    const filterBooks = () => {

        let tempFilterValue = searchInput
        let tempBooks = books.filter(b => {
            return b.title.toLowerCase().includes(tempFilterValue.toLowerCase()) && b
        })
        // infine, setto l'array filteredBooks con l'array che contiene i valori filtrati
        setFilteredBooks(tempBooks)
    }

    const changeGenre = () => {
        switch (selectedGenre) {
            case "Fantasy": 
                setBooks(fantasy)
                break
            case "History": 
                setBooks(history)
                break
            case "Horror": 
                setBooks(horror)
                break
            case "Romance": 
                setBooks(romance)
                break
            case "Sci-Fi": 
                setBooks(scifi)
                break
            default:
                setBooks(fantasy)
                break
        }
    }

    useEffect(changeGenre, [selectedGenre])
    // spezzo lo useEffect in due (al posto che mettere le due funzioni nello stesso useEffect), perchè 
    // una dipende dall'altra, e la latenza incasina le cose (cambio genere, ma la funzione filter books si
    // trova ancora lo stato "vecchio".)
    // devo però mettere anche come stato monitorato books, perchè la funzione filterbook dipende dallo
    // stato books
    useEffect(filterBooks, [books, searchInput])

    return (
        <Row>
            {filteredBooks.map(b => <SingleBook key={b.asin} book={b}></SingleBook>)}
        </Row>

    );

}

export default AllTheBooks;