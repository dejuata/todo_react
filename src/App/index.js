import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


// const defaultTodos = [
//   { id: 'todo_1', text: 'Cortar cebolla', completed: false},
//   { id: 'todo_2', text: 'Tomar curso', completed: false},
//   { id: 'todo_3', text: 'Llorar con la llorona', completed: true}

// ]

// Renderizar etiqueta invisible React.Fragment
// Cuando se itera la lista de todos, al componente se debe de enviar una propiedad key para indicarle a react que componente pertenece a quien

function App() {
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
