import Searchbar from './searchbar';
import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.jpg'


const React = require('react');


function Navigation(html) {
    let [search, setSearch] = useState('');
    let [message, setMessage] = useState('');
    let [data, setData] = useState([]);
  
    useEffect(() => {
      if (search) {
        const fetchData = async () => {
          document.title = `${search} Music`;
          const response = await fetch(search);
          const resData = await response.json();
          if (resData.results.length > 0) {
            setData(resData.results);
          } else {
            setMessage('NotFound');
          }
          console.log(resData);
        };
        fetchData();
      }
    }, [search]);
  
    const handleSearch = (e, term) => {
      e.preventDefault();
      setSearch(term);
    };

    return (

      <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">
              <img 
                src={logo}
                alt="Logo"
                width="40"
                height="40">
              </img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/create">Create Tutorial</Nav.Link>
                <Nav.Link href="/tutorials">Tutorials</Nav.Link>
                <Searchbar handleSearch={handleSearch} />
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/create-user">Register</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>



    )
}

export default Navigation; 









