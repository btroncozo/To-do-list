import React from 'react';

// Recibimos la lista de tareas y la función para eliminar
function TaskList({ tareas, onDeleteTask }) {
  
  // Condicion: si la lista esta vacia se muestra "Sin tareas pendientes"
  if (tareas.length === 0) {
    return <p className="empty-message">Sin tareas pendientes.</p>;
  }

  return (
    <ul className="task-list">
      {/* Rellenamos la lista con los objetos tarea para ser visualizados en la pagina */}
      {tareas.map(tarea => (
        <li key={tarea.id} className={`task-item ${tarea.completada ? 'completed' : ''}`}>
          
          <span className="task-text">
            {tarea.texto}
          </span>
          
          <button 
            // Al hacer clic, llamamos a la función de eliminación
            onClick={() => onDeleteTask(tarea.id)}
            className="delete-button"
          >
            Eliminar
          </button>
          
        </li>
      ))}
    </ul>
  );
}

export default TaskList;