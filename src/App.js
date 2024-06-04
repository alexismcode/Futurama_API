// Importación de módulos y recursos necesarios
import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import wallpaper from './wallpaper.jpg';
import ship from './ship.png';
import github from './github-icon.png';
import gmail from './gmail-icon.png';
import instagram from './instagram-icon.png';
import linkedin from './linkedin-icon.png';
import './App.css'; // Estilos CSS para la aplicación
import CharacterCard from './CharacterCard'; // Componente para mostrar información de personajes
import CreateCharacterForm from './CreateCharacterForm'; // Componente para crear un nuevo personaje

const API_URL = 'https://api.sampleapis.com/futurama/characters'; // URL de la API para obtener datos de personajes de Futurama

function App() {
  // Estado para almacenar la lista completa de personajes
  const [characters, setCharacters] = useState([]);
  // Estado para almacenar la lista de personajes que se muestran actualmente
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  // Estado para controlar si se muestra o no el formulario de creación de personajes
  const [showCreatePopup, setShowCreatePopup] = useState(false);

  // Hook useEffect para obtener datos de personajes al cargar la página
  useEffect(() => {
    async function fetchCharacters() {
      try {
        // Obtener datos de la API
        const response = await fetch(API_URL);
        const data = await response.json();
        // Actualizar el estado con los datos obtenidos y mostrar solo los primeros 3 personajes
        setCharacters(data);
        setDisplayedCharacters(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }

    fetchCharacters();
  }, []); // El arreglo vacío asegura que este efecto solo se ejecute una vez al cargar la página

  // Función para agregar un personaje nuevo a la lista de personajes mostrados
  const addCharacter = () => {
    const remainingCharacters = characters.filter(character => !displayedCharacters.includes(character));
    if (remainingCharacters.length > 0) {
      const newCharacter = remainingCharacters[0];
      setDisplayedCharacters([...displayedCharacters, newCharacter]);
    } else {
      alert('No hay más personajes para añadir.');
    }
  };

  // Función para agregar un nuevo personaje a la lista completa de personajes y a la lista mostrada
  const addNewCharacter = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
    setDisplayedCharacters([...displayedCharacters, newCharacter]);
  };

  // Función para editar el nombre de un personaje existente en la lista mostrada
  const editCharacter = (index, newName) => {
    const updatedCharacters = [...displayedCharacters];
    const [first, last] = newName.split(' ');
    updatedCharacters[index].name.first = first;
    updatedCharacters[index].name.last = last || '';
    setDisplayedCharacters(updatedCharacters);
  };

  // Función para eliminar un personaje de la lista mostrada
  const deleteCharacter = (index) => {
    const newDisplayedCharacters = displayedCharacters.filter((_, i) => i !== index);
    setDisplayedCharacters(newDisplayedCharacters);
  };

  // Hook useEffect para controlar la visibilidad de los botones de añadir y crear personajes
  useEffect(() => {
    const handleScroll = () => {
      const mainBody = document.querySelector('main.body');
      const nav = document.querySelector('nav');
      const mainPosition = mainBody.getBoundingClientRect().top;
      const navPosition = nav.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 2;
      const addCharacterBtn = document.getElementById('add-character-btn');
      const createCharacterBtn = document.getElementById('create-character-btn');

      if (mainPosition < screenPosition && navPosition > screenPosition) {
        addCharacterBtn.style.display = 'block';
        createCharacterBtn.style.display = 'block';
      } else {
        addCharacterBtn.style.display = 'none';
        createCharacterBtn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar la posición al cargar la página

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Renderizado JSX de la aplicación
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="charactersRedirect" href="#characters">Personajes</a>
      </header>
      <section className="home">
        <img src={wallpaper} className="wallpaper" alt="wallpaper" />
        <figure className="space"></figure>
      </section>
      <main className="body">
        <section className="caption">
          <img src={ship} className="ship" alt="ship image" />
          <h2 className="title">PERSONAJES</h2>
        </section>

        <section id="characters">
          {displayedCharacters.map((character, index) => (
            <CharacterCard
              key={index}
              character={character}
              index={index}
              deleteCharacter={deleteCharacter}
              editCharacter={editCharacter}
            />
          ))}
        </section>

        <button id="add-character-btn" onClick={addCharacter}>Añadir personaje</button>
        <button id="create-character-btn" onClick={() => setShowCreatePopup(true)}>Crear personaje</button>

        {showCreatePopup && (
          <CreateCharacterForm
            addNewCharacter={addNewCharacter}
            closePopup={() => setShowCreatePopup(false)}
          />
        )}
      </main>
      <nav>
        <h2 className="contact">CONTACTAME</h2>
        <ul>
          <a className="icons" href="https://github.com/alexismcode" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
          <a className="icons" href="https://www.instagram.com/alexismcode/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
          <a className="icons" href="https://www.linkedin.com/in/alexismcode/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
          <a className="icons" href="mailto:alexismcode@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="" /></a>
        </ul>
      </nav>
      <footer>
        <h3>Copyright© 2024 | Designed by <a href="">alexismcode</a></h3>
      </footer>
    </div>
  );
}

export default App;
