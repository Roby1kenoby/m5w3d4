import './AddComment.css'
import { Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { BookContext } from '../BookContextProvider';
import apikey from '../../data/apikey';
function AddComment() {

    const initialFormData = {
        elementId: 0,
        rate: 1,
        comment: ''
    }
    
    // stato per AddComment
    const [formData, setFormData] = useState(initialFormData)
    const [selectedBook, setSelectedBook] = useContext(BookContext)
    

    return ( 
        <Form>
            <Form.Group>
                <Form.Label>Rate this book!</Form.Label>
                <Form.Select aria-label="Default select example" value={formData.rate} 
                    onChange={(event) => setFormData({...formData, rate: event.target.value})}
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
                    onChange={(event) => setFormData({...formData, comment: event.target.value})}
                    disabled={selectedBook ? false : true}
                    >
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default AddComment;