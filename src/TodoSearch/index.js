import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';


function TodoSearch() {
    // Manejar estado en react cuando los componentes son creados como funciones
    // const [searchValue, setSearchValue] = React.useState('');

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Tarea"
            value={ searchValue }
            onChange={ onSearchValueChange }
        />
    );
        // <p>
        //     { searchValue }
        // </p>
}

export {
    TodoSearch
}