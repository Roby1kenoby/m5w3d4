import { useState, useContext, useEffect } from 'react';
import './CommentList.css'
import SingleComment from './SingleComment';
import { BookContext } from '../BookContextProvider';

function CommentList({reviewAdded, setReviewAdded}) {
    const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3M2M5NTdmNmI0YjAwMTU0MjhmYmIiLCJpYXQiOjE3MjAyMTI2NzgsImV4cCI6MTcyMTQyMjI3OH0.PhUhplwS_bhA_Xr2FoZVKfD2ODGab5aq9UeQsuaLv1E'
    const getApiUrl = 'https://striveschool-api.herokuapp.com/api/books/'

    const [reviews, setReviews] = useState([])
    const [selectedBook] = useContext(BookContext)

    // funzione per recuperare le reviews
    const loadReviews = async () => {
        if(selectedBook){
            let fetchedReviews = await fetch(getApiUrl + selectedBook + '/comments', {
                headers: {
                    Authorization: apiKey,
                },
                method: 'GET'
            })
            let data = await fetchedReviews.json()
            setReviews(data)
            setReviewAdded(false)

        }
        else{
            setReviews([])
        }
    }

    useEffect(() => {loadReviews()}, [selectedBook, reviewAdded])

    return ( 
        <ul>{reviews.map(r => <SingleComment key={r._id} review={r}></SingleComment>)}</ul>
    );
}

export default CommentList;