import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState } from 'react';

function Searchbar({ props }) {
  let [searchTerm, setSearchTerm] = useState('');

  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
      <div className="search">
        <div className="searchInput">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search for Guides..."
          />
          <div className="searchIcon">
            <button type="submit">{<SearchOutlinedIcon />}</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Searchbar;