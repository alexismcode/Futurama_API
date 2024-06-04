// Importación de módulos y recursos necesarios desde React
import React, { useState } from 'react';

// Definición del componente CharacterCard
function CharacterCard({ character, index, deleteCharacter, editCharacter }) {
  // Estado local para controlar si se está editando el nombre del personaje
  const [isEditing, setIsEditing] = useState(false);
  // Estado local para almacenar el nuevo nombre del personaje durante la edición
  const [newName, setNewName] = useState(`${character.name.first} ${character.name.last}`);

  // Función para manejar la edición del nombre del personaje
  const handleEdit = () => {
    // Si se está editando, llama a la función para editar el personaje con el nuevo nombre
    if (isEditing) {
      editCharacter(index, newName);
    }
    // Cambia el estado para indicar si se está editando o no
    setIsEditing(!isEditing);
  };

  // Renderizado JSX de la tarjeta de personaje
  return (
    <div className="character-card">
      {/* Imagen del personaje */}
      <img src={character.images.main} alt={`${character.name.first} ${character.name.last}`} />
      <div className="character-name">
        {/* Si se está editando, muestra un campo de entrada para el nombre; de lo contrario, muestra el nombre */}
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)} // Actualiza el estado del nuevo nombre
          />
        ) : (
          `${character.name.first} ${character.name.last}`
        )}
      </div>
      {/* Botón para editar o guardar el nombre del personaje */}
      <button className="edit-button" onClick={handleEdit}>
        {isEditing ? 'Guardar' : 'Editar'}
      </button>
      {/* Botón para eliminar el personaje */}
      <button className="delete-button" onClick={() => deleteCharacter(index)}>X</button>
    </div>
  );
}

// Exportación del componente CharacterCard
export default CharacterCard;
