import Searchbar from './searchbar';
import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
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
            <Navbar.Brand href="/home">
              <img 
                src="https://document-export.canva.com/sNHIM/DAFCZksNHIM/4/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220612T171012Z&X-Amz-Expires=6176&X-Amz-Signature=cb71670f9c90fcdfc0cd2628f750b02e6ab9fda9083d450cdc12bd0335762793&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2012%20Jun%202022%2018%3A53%3A08%20GMT" 
                alt="Logo"
                width="40"
                height="40">
              </img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/create">Create Tutorial</Nav.Link>
                <Nav.Link href="/tutorials">Tutorials</Nav.Link>
                <Searchbar handleSearch={handleSearch} />
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>



    )
}

export default Navigation; 









