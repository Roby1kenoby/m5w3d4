import './AddComment.css'
import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { BookContext } from '../BookContextProvider';

function AddComment({setReviewAdded}) {
    const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY3M2M5NTdmNmI0YjAwMTU0MjhmYmIiLCJpYXQiOjE3MjAyMTI2NzgsImV4cCI6MTcyMTQyMjI3OH0.PhUhplwS_bhA_Xr2FoZVKfD2ODGab5aq9UeQsuaLv1E'
    const postApiUrl = 'https://striveschool-api.herokuapp.com/api/comments'

    const initialFormData = {
        elementId: 0,
        rate: 1,
        comment: ''
    }

    // stato per AddComment
    const [formData, setFormData] = useState(initialFormData)
    const [selectedBook] = useContext(BookContext)

    const saveReview = function () {
        postReview()
    }

    // funzione con fetch per salvare una review
    const postReview = async () => {
        try {
            // mi devo aggiornare l'elementId del form, perché se no ce l'ha a 0 dall'inizializzaz.
            const updatedFormData = {...formData, elementId:selectedBook}
            let resp = await fetch(postApiUrl, {
                headers: {
                    Authorization: apiKey,
                    "Content-type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(updatedFormData)

            }
            )
            // dopo che la post è andata a buon fine, indico che la review è stata aggiunta per aggiornare
            // la lsita grazie a useEffect
            if (!resp.ok) {
                throw new Error('Review discarded. Compile mandatory fields!')
            }
            else {
                alert("Review Added!")
                setReviewAdded(true)
                setFormData(initialFormData)
            }
        } catch (error) {
            alert(`Review not added for the following reason.\n${error}`)
            console.log(error)
        }
    }




    return (
        <Form>
            <Form.Group>
                <Form.Label>Rate this book!</Form.Label>
                <Form.Select aria-label="Default select example" value={formData.rate}
                    onChange={(event) => setFormData({ ...formData, rate: event.target.value })}
                    required
                    disabled={selectedBook ? false : true}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>

            </Form.Group>
            <Form.Group>
                <Form.Label>Write a review!</Form.Label>
                <Form.Control as="textarea" required value={formData.comment}
                    onChange={(event) => setFormData({ ...formData, comment: event.target.value })}
                    disabled={selectedBook ? false : true}
                >
                </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={saveReview}
                disabled={selectedBook ? false : true}
            >
                Save Review
            </Button>
        </Form>

    );
}

export default AddComment;