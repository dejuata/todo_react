import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

// Compartir estado en toda la aplicación
function TodoProvider(props) {
    // Utilizar react hooks
    const {
        item:todos, 
        saveItem:saveTodos, 
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    // const [todos, setItem] = React.useState(parsedItem);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        try {
            const newTodos = [...todos];
            // Podemos generar un uid, por ahora con el tamaño
            let idTodos = todos.length;
            newTodos.push({
                id: idTodos,
                text,
                completed: false
            })
            saveTodos(newTodos);
        } catch (err) {
            console.log(err)
        }
    }


    const completeTodo = (id) => {
        let items = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = true;
        }
        return todo
        })
        saveTodos(items);
        // const todoIndex = todos.findIndex(todo => todo.text === text);
        // const items = [...todos];
        // items[todoIndex].completed = true
        // // Causa un re-render en nuestros componentes
        // setItem(items);
    }
    
    const deleteTodo = (id) => {
        let items = todos.filter(todo => {
            return todo.id !== id ;
        })
        saveTodos(items);
    }

    // Ejecuta el código antes de que react renderize la aplicación
    React.useEffect(() => {

    }, [totalTodos]);
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {
    TodoProvider,
    TodoContext
}