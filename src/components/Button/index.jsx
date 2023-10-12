import React from 'react';
import PropTypes from 'prop-types';
import './button.css'; // Arquivo de estilos

const Button = ({ color, size, name, onPress }) => {
  const buttonStyle = {
    borderRadius: '10px',  // Bordas arredondadas
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',  // Sombra
    backgroundColor: color === 'secondary' ? '#e6e1e1' : '#d94b41',  // Cor do botão
    padding: `16px ${size}px`,  // Tamanho do botão
    color : color === 'secondary' ? 'black' : 'white',
  };

  const handleMouseEnter = () => {
    // Aumenta o tamanho e muda o cursor ao passar o mouse
    const button = document.getElementById(name);
    if (button) {
      button.style.transform = 'scale(1.03)';
      button.style.cursor = 'pointer';
    }
  };

  const handleMouseLeave = () => {
    // Retorna ao tamanho original ao tirar o mouse
    const button = document.getElementById(name);
    if (button) {
      button.style.transform = 'scale(1)';
      button.style.cursor = 'default';
    }
  };

  return (
    <button
      id={name}
      className="custom-button"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onPress}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  size: 100,
};

export default Button;
