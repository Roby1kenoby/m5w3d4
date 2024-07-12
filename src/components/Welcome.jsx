import './Welcome.css'
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

function Welocme() {
    const [show, setShow] = useState(true);
    return (
        <div>
            <Alert key="primary" variant="primary" onClose={() => setShow(false)} dismissible>
                Benvenuto in FunnyBooks!
            </Alert>
            <h1>FunnyBooks! Where Fun meet books!</h1>
        </div>
    );
}

export default Welocme;