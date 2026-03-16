
import * as React from 'react';
import {ThemeProvider} from "styled-components"
import './App.css';
import {AddTodo} from "./AddTodo";
import { TodoItem, type ITodoItem } from './TodoItem';
import type { Theme } from './styled'; 

 const THEME: Theme = {
  colors: {
    primary: "#aa3bff",
    primary_light: "rgba(170, 59, 255, 0.5)",
    secondary: "#6b6375",
    border_color: "#e5e4e7"
  }
 }


 /**
  * Styled component
  * Questions
  * Persisted storage
  * __
  * Custom hook 
  * Providers
  * __
  * API Integration and database
  */



function App() { 
  const [todoList, setTodoList] = React.useState([{
    id: "1",
    value: "Complete chores",
  }, {
    id: "2",
    value: "Buy groceries",
  }]);

  const handleAddTodo = (newTodo: string) => {
    setTodoList((prevState) => {
      return [
        ...prevState,
        {
          id: Date.now().toString(),  
          value: newTodo,
        }
      ]

    })
}


const handleDeleteTodo = (id: string) => {
  setTodoList((prevState) => { 
      return prevState.filter((el) => el.id !== id)
  })
}

const handleUpdateTodoValue = ({id, value}: ITodoItem) => {

  setTodoList(prevState => {
  


    return prevState.map(el => {
      if(el.id === id) {
        return {
          ...el,
          value
        }
      }



      return el;
    });
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
