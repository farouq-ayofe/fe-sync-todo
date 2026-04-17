
import * as React from 'react';
import {ThemeProvider} from "styled-components"
import './App.css';
import {AddTodo} from "./AddTodo";
import { TodoItem, type ITodoItem } from './TodoItem';
import type { Theme } from './styled'; 

// import { Button, TextInput } from "./atoms";
//  import { Button } from "./atoms/Button";
//  import { TextInput } from "./atoms/TextInput";


 const THEME: Theme = {
  is_dark_theme: false,
  
  colors: {
    primary: "#aa3bff",
    primary_light: "rgba(170, 59, 255, 0.5)",
    secondary: "#6b6375",
    border_color: "#e5e4e7"
  },
  
 }


 /**
  * Styled component ⚠️
  * 
  * Questions
  * Persisted storage 
  * __
  * Custom hook 
  * Providers
  * __
  * API Integration and database
  */


 // useEffect

 // useSyncExternalStore

const STORAGE_KEY = "todos";


 const initializeTodos = () => {
  const todo = localStorage.getItem(STORAGE_KEY);


  if(todo) {
    return JSON.parse(todo);
  }

  return [
    ];


 }




export function App() { 
  const [todoList, setTodoList] = React.useState<ITodoItem[]>(initializeTodos());


  


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

  return (
    <ThemeProvider theme={THEME}>
    <div className="app-container">
      <section id="center">
         <AddTodo handleAddTodo={handleAddTodo} />
      </section>

      <ul className="ticks">
        {todoList.map((todo) => {
            return  (
              <TodoItem  key={todo.id} todo={todo} deleteTodoItemFn={handleDeleteTodo} handleUpdateTodoValue={handleUpdateTodoValue} />
            )
        })}
      </ul>
  

      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
    </ThemeProvider>
  )
}

export default App
