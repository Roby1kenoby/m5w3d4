import './CommentArea.css'
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { useState } from 'react';


function CommentArea() {
    // stato usato per refreshare la lista di review se addComment ha aggiunto un commento.
    const [reviewAdded, setReviewAdded] = useState(false)

    return ( 
        <div className="commentAreaWrapper">
            <AddComment setReviewAdded={setReviewAdded}></AddComment>
            <CommentList reviewAdded={reviewAdded} setReviewAdded={setReviewAdded}></CommentList>
        </div>
    );
}

export default CommentArea;