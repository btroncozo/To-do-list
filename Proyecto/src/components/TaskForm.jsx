import React, { useState } from 'react';

// Recibimos la función onAddTask desde el componente App.jsx
function TaskForm({ onAddTask }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la pagina se recargue al enviar el formulario
    
    // condicional para verificar que el texto que ingresa el usuario no sea campo vacio
    if (inputText.trim() === '') {
      alert('Debes escribir una tarea.');
      return;
    }
    
    // Llamamos a la funcion onAddTask para agregar la tarea
    onAddTask(inputText.trim()); 
    
    // Limpiamos el input después de agregar
    setInputText(''); 
  };

  return (
    // Usamos el evento onSubmit del formulario 
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Agrega una nueva tarea"
        value={inputText}
        
        onChange={(e) => setInputText(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-button">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TaskForm;