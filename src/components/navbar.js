import Searchbar from './searchbar';
import { useEffect, useState } from 'react';
const React = require('react');

function Navbar(html) {
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
    <html>
      <head>
        <title>DIY Tutorial App</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
        {/* <link rel="stylesheet" href="./style.css" /> */}
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/create">Create a Guide</a>
              </li>
              <li>
                <a href="/:id">View Guides</a>
              </li>
              <li>
                <a href="/edit/:id">Edit Guides</a>
              </li>
            </ul>
            <Searchbar handleSearch={handleSearch} />
          </nav>
        </header>
      </body>
    </html>
  );
}

export default Navbar;