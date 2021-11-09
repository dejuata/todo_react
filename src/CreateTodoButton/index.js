import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {

    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const onClickButton = () => {
        if (!openModal) {
            setOpenModal(true);
        } else {
            setOpenModal(false);
        }

        // setOpenModal(prevState => !prevState);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={ onClickButton }
        >
            +
        </button>
    );
}

export {
    CreateTodoButton
}