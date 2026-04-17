import * as React from 'react';
import {EditButton as SaveButton,StyledEditTodoButtons, StyledEditTodo, StyledInput }  from "./TodoItem.styled"
import type {ITodoItem} from "./types";

export interface EditTodoProps { 
    handleCancelEditing: () => void;
    todo: ITodoItem; 
    handleUpdateTodoValue: (p: ITodoItem) => void;
};

export const EditTodo  = ({handleCancelEditing, todo, handleUpdateTodoValue}: EditTodoProps) => {
const [value, setValue] = React.useState(todo.value);



const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

}


const handleSave  = () => {

    const lastUpdateTime = localStorage.getItem("last-update-time");
    console.log("🚀 ~ handleSave ~ lastUpdateTime:", lastUpdateTime)


    if(value.trim().length < 1) { 
        return;
    }

    handleUpdateTodoValue({
        id: todo.id,
        value
    })

    handleCancelEditing();
}

    return (
    <StyledEditTodo>
            <StyledInput type="text" value={value} onChange={handleInputChange} />

    <StyledEditTodoButtons>
        <SaveButton onClick={handleSave}>
            save
        </SaveButton>

        <button onClick={handleCancelEditing}>
            cancel
        </button>
    </StyledEditTodoButtons> 
    </StyledEditTodo>
    )
}