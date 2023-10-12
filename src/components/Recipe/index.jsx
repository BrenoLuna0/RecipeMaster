import React from 'react';
import './recipe.css'; // Estilo para o card

const RecipeCard = ({ imageSrc, title, onPress }) => {
  return (
    <div className="recipe-card" onClick={onPress}>
      <div className="recipe-card-image" style={{ backgroundImage: `url(${imageSrc})` }} />
      <div className="recipe-card-content">
        <h2 className="recipe-title">{title}</h2>
      </div>
    </div>
  );
};

export default RecipeCard;
