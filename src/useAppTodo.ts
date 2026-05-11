import * as React from 'react';
import type { ITodoItem } from './TodoItem/types';

  const STORAGE_KEY = "todos";


 const initializeTodos = () => {
  const todo = localStorage.getItem(STORAGE_KEY);


  if(todo) {
    return JSON.parse(todo);
  }

  return [
    ];


 }

// another custom hook
 const useOurState = () => {
    const [state, setState] = React.useState<ITodoItem[]>(initializeTodos());

    return [state, setState] as const;
 }


/**
 * - begins with `use`
 * - uses/implements another custom hook
 * - uses/implements any react hook
 *  
 * 
 * - give example of one that doesn't return anything
 */

export const useAppTodo =() => {
const [todoList, setTodoList] = useOurState();

  // React.useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
  // }, 
  // [todoList]);

  /**
   * - retrieve todos from local storage
   * - set todos to local storage
   * - update todos in local storage
   * - delete todos from local storage
   */

  const handleAddTodo = (newTodo: string) => {
    setTodoList((prevState) => {
      const updatedTodo =  [
        ...prevState,
        {
          id: Date.now().toString(),  
          value: newTodo,
        }
      ]
 

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodo));
      return updatedTodo;
    })
}


const handleDeleteTodo = (id: string) => {
  setTodoList((prevState) => { 
    const updatedTodo = prevState.filter((el) => el.id !== id)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodo));
    return updatedTodo;
  })
}

const handleUpdateTodoValue = ({id, value}: ITodoItem) => {

  setTodoList(prevState => {
  
    const updatedTodo = prevState.map(el => {
      if(el.id === id) {
        return {
          ...el,
          value
        }
      }

      return el;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodo));
    
    return updatedTodo;
  })

}


// as const; to persist the return value type on index reference
// return [todoList, handleAddTodo, handleDeleteTodo, handleUpdateTodoValue] as const ;

  return {
    todoList,
    handleAddTodo,
    handleDeleteTodo,
    handleUpdateTodoValue
  }
}
 


export const useUpdateTitle = (newTitle: string) => {
    React.useEffect(() => {
     // telemetry data to api 
     const element = document.getElementById("title");

     if(element) {
        // element.textContent = "Pascal";
    const newElement = document.createElement("p");
    newElement.textContent = newTitle;

        element.appendChild(newElement);
     }
    },[])
}

// export const = exporting a named item 
// export default = exporting an un-named item as default
