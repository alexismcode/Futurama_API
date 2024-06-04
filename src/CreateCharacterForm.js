// Importación de módulos y recursos necesarios desde React
import React, { useState } from 'react';

// Definición del componente CreateCharacterForm
function CreateCharacterForm({ addNewCharacter, closePopup }) {
  // Estados locales para almacenar el nombre y la URL de la imagen del nuevo personaje
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Verificar si se proporcionó un nombre y una URL de imagen válidos
    if (name && image) {
      // Crear un nuevo objeto de personaje con los datos proporcionados
      const newCharacter = {
        name: { first: name.split(' ')[0], middle: '', last: name.split(' ')[1] || '' },
        images: { 'head-shot': '', main: image }
      };
      // Llamar a la función para agregar el nuevo personaje
      addNewCharacter(newCharacter);
      // Limpiar los campos de nombre e imagen
      setName('');
      setImage('');
      // Cerrar el formulario emergente
      closePopup();
    } else {
      // Mostrar una alerta si los campos están vacíos
      alert('Por favor, ingresa un nombre y una URL de imagen válidos.');
    }
  };

  // Renderizado JSX del formulario de creación de personajes
  return (
    <div id="create-character-popup" className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={closePopup}>&times;</span>
        <form id="create-character-form">
          <input
            type="text"
            id="character-name"
            placeholder="Nombre del personaje"
            value={name}
            onChange={(e) => setName(e.target.value)} // Actualizar el estado del nombre
          />
          <input
            type="text"
            id="character-image"
            placeholder="URL de la imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)} // Actualizar el estado de la imagen
          />
          <button type="button" onClick={handleSubmit}>Crear personaje</button> {/* Botón para enviar el formulario */}
        </form>
      </div>
    </div>
  );
}

// Exportación del componente CreateCharacterForm
export default CreateCharacterForm;
