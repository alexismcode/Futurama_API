// Importación de módulos y recursos necesarios desde React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos CSS globales
import App from './App'; // Componente principal de la aplicación
import reportWebVitals from './reportWebVitals'; // Función para reportar métricas web

// Creación de un contenedor de raíz usando ReactDOM.createRoot, que recibe un elemento del DOM como argumento
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizado del componente principal App dentro del contenedor de raíz
root.render(
  <React.StrictMode> {/* Modo estricto de React */}
    <App /> {/* Componente principal de la aplicación */}
  </React.StrictMode>
);

reportWebVitals(); // Llamada a la función para reportar métricas web

