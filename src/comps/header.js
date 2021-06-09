import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
// import { useSelector, useDispatch } from 'react-redux'

const Header = (props) => {
    // const dispatch = useDispatch()


    return (
        <div className="header">
            <Navbar expand="lg" bg="light" variant="light">
                <Container fluid>
                    <div className='nav-left'>
                        <Button className='navbar-toggler nav-toggle' type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="">MENU</span>
                        </Button>
                        <div className='search-icon-wrapper'>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <div className='brand-wrapper me-auto text-center'>
                        <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                    </div>
                    <div className='nav-right ms-5'>
                        <p className="cart-num">00</p>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">MEN</Nav.Link>
                            <Nav.Link href="#pricing">WOMAN</Nav.Link>
                            <Nav.Link href="#pricing">CHILD</Nav.Link>
                            <Nav.Link href="#pricing">ACCESSORIES</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
