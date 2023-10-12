import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import './searchBar.css';

const SearchBar = ({ onPress }) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    onPress(value);
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search recipe" className="search-input" value={value} onChange={(e)=> setValue(e.target.value)} />
      <button className="search-button" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default SearchBar;