import * as React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  max-width: 500px;
`;

interface AddTodoProps {
    handleAddTodo: (newTodo: string) => void;
}

export const AddTodo = ({handleAddTodo}: AddTodoProps) => {
    const [value, setValue] = React.useState("");  

    /**
     * An input and a button side by side
     */


    const handleAdd = () => {
        handleAddTodo(value);
        // another for 2 way binding
        // reset state
        setValue("");
    }
   

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 

        const newValue = event?.target.value;

        setValue(newValue)
    }

    return (


        <div className="add-todo-container">


            <input  className="add-todo-input" type="text" placeholder="Add a new todo" onChange={handleInputChange} value={value} /> 

         

            <button className="add-todo-button" onClick={handleAdd}>Add Todo</button>
        </div>
    )


}