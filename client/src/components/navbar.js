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
            <Navbar.Brand href="/">
              <img 
                src="https://document-export.canva.com/sNHIM/DAFCZksNHIM/4/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220615%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220615T171012Z&X-Amz-Expires=13376&X-Amz-Signature=40914eb6e18b3eea152a124497864732861b9f6ec79b360d7801ad05bd59e152&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2015%20Jun%202022%2020%3A53%3A08%20GMT"
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
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>



    )
}

export default Navigation; 









