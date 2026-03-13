
import * as React from 'react';
import './App.css';
import {AddTodo} from "./AddTodo";

 
/**
 * Declare Todo Item Type
 *  
 */

interface TodoItem {
  id: string;  // unique id
  value: string; // todo
}




function App() { 
  const [todoList, setTodoList] = React.useState<Array<TodoItem>>([{
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

  return (
    <>
      <section id="center">
         <AddTodo handleAddTodo={handleAddTodo} />
      </section>

      <ul className="ticks">
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.value}</li>
        ))}
      </ul>
  

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
