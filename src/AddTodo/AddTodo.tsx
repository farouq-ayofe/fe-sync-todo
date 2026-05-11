import * as React from "react";  

 import { useTodoContext } from "../context";
import { useGetCars } from "../hooks/api";

interface AddTodoProps {
    handleAddTodo: (newTodo: string) => void;
}

export const AddTodo = () => {
    const { handleAddTodo } = useTodoContext();
    const [value, setValue] = React.useState("");   
  const {data, isLoading, error} = useGetCars();
  console.log("🚀 ~ AddTodo ~ data:", data)

    console.log("🚀 ~ AddTodo ~ AddTodo:", "RERENDERED")

    /**
     * An input and a button side by side
     */


    const handleAdd = () => { 
        if(value.trim().length < 1) { 
            return;
        }


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
<>

            {isLoading ? <div>Loading...</div> : null}
            {error ? <div>Error: {error.message}</div> : null}
            {data ? <div>Data: {data.length}</div> : null}


        <div className="add-todo-container">


            <input  className="add-todo-input" type="text" placeholder="Add a new todo" onChange={handleInputChange} value={value} /> 

         

            <button className="add-todo-button" onClick={handleAdd}>Add Todo</button>
        </div>

        </>
    )


}