import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    return (
        <nav className="Navbar">
            <Nav variant="pills" activeKey="/" onSelect={() => { }}>
                <Nav.Item>
                    <Nav.Link as={Link} to="/" eventKey="/" className="nav-link dtexts">
                        Home
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Degrees" id="nav-dropdown" className="nav-dropdown">
                    <NavDropdown.Item as={Link} to="/degreespage" eventKey="/degree" className="dtexts">
                        <header style={{ color: 'black' }}>
                            All Degrees
                        </header>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/newdeg" eventKey="/newdeg" className="dtexts">
                        <header style={{ color: 'black' }}>
                            Create New Degree
                        </header>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Cohorts" id="nav-dropdown" className="nav-dropdown">
                    <NavDropdown.Item as={Link} to="/cohort" eventKey="/cohort" className="dtexts">
                        <header style={{ color: 'black' }}>
                            All Cohorts
                        </header>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/newcohort" eventKey="/newcohort" className="dtexts">
                        <header style={{ color: 'black' }}>
                            Create New Cohort
                        </header>
                    </NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="Modules" id="nav-dropdown" className="nav-dropdown">
                    <NavDropdown.Item as={Link} to="/module" eventKey="/module" className="dtexts">
                        <header style={{ color: 'black' }}>
                            All Modules
                        </header>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/createmod" eventKey="/createmod" className="dtexts">
                        <header style={{ color: 'black' }}>
                            Create New Module
                        </header>
                    </NavDropdown.Item>
                </NavDropdown>

            </Nav>
        </nav>
    );
}

export default Navbar;
