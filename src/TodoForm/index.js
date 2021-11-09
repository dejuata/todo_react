import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { 
        addTodo,
        setOpenModal 
    } = React.useContext(TodoContext);

    const onCancel = () => {

    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        let todo = event.target.value;
        setNewTodoValue(todo)
    }

    return (
        <form onSubmit={ onSubmit }>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder = "Ingresa tu TODO"
                value = { newTodoValue }
                onChange = { onChange }
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={ onCancel }
                    className="TodoForm-button TodoForm-button--cancel"
                >
                        Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {
    TodoForm
}