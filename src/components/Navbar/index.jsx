import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar'; // Importe o componente da barra de pesquisa
import './navbar.css'; // Arquivo de estilos

const Navbar = ({ onPress }) => {
  return (
    <div className="navbar" style={{ backgroundColor: '#d94b41' }}>
      <div className="logo">
        {/* Coloque a sua logo aqui */}
        <img src="https://i.ibb.co/YXVR3pp/recipe-master-low-resolution-color-logo.png" width={150} height={100} alt="Logo" />
      </div>
      <div className="search-bar" style={{ backgroundColor: '#e6e1e1' }}>
        {/* Use o componente da barra de pesquisa e passe a ação onPress como prop */}
        <SearchBar onPress={onPress} />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Navbar;