import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div className='pb-3 mb-5'>
            <>
                <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home"> <span className="fw-bold fs-2 text-info">Food Door</span> </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>



                            {user?.email ?
                                <> <Nav.Link as={Link} to="/myOrder">My Order</Nav.Link>
                                    <Nav.Link as={Link} to="/manageOrder">Manage Order</Nav.Link>
                                    <Nav.Link as={Link} to="/addProducts">Add Products</Nav.Link>
                                    <Button onClick={logOut} variant="light">Log out</Button> </> :
                                <Nav.Link as={Link} to="/login">Log in</Nav.Link>}
                            <Navbar.Text>
                                <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>

    );
};

export default Header;