import './MyNav.css'
import { Form, Button, Container, Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
function MyNav({ selectedGenre, setSelectedGenre, searchInput, setSearchInput }) {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">FunnyBooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form.Select aria-label="Default select example">
                        <option value="Fantasy">Fantasy</option>
                        <option value="History">History</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </Form.Select>
                </Navbar.Collapse>
                <div className='formContainer'>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Find your new favourite book!"
                                name='filterValue'
                                onChange={(event) => setSearchInput(event.target.value)}
                            value={searchInput} 
                            />
                        </Form.Group>
                    </Form>
                </div>
                <Button >
                    Darktheme
                </Button>
            </Container>
        </Navbar>
    );
}

export default MyNav;