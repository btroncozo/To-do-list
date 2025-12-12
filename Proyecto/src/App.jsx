import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/Tasklist';
import './App.css';

function App() {
  // Inicializamos el estado con una lista vacia.
  // 'tareas' es el valor actual, 'setTareas' es la funcion para cambiarlo.
  const [tareas, setTareas] = useState([]);

  const handleAddTask = (nuevaTarea) => {
    // Creamos un nuevo objeto de tarea
    const tareaObj = {
      id: Date.now(), // a las tareas se les asigna un ID unico
      texto: nuevaTarea,
      completada: false,
    };
    
    // Actualizamos el estado con la nueva tarea (copiando las anteriores)
    setTareas([...tareas, tareaObj]);
  };

  const handleDeleteTask = (id) => {
    // Filtramos la lista para dejar solo las tareas cuya ID no coincida con el eliminado
    const listaActualizada = tareas.filter(tarea => tarea.id !== id);
    setTareas(listaActualizada);
  };

  return (
    <div className="app-container">
      <h1>To do List</h1>
      
      {/*Componente para agregar tareas (le pasamos la funcion para agregar)*/}
      <TaskForm onAddTask={handleAddTask} />
      
      {/*Componente para mostrar tareas (le pasamos la lista de tareas y la funcion para eliminar)*/}
      <TaskList 
        tareas={tareas} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;