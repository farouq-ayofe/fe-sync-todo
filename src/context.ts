import * as React from "react";
import type { ITodoItem } from "./TodoItem";


interface TodoListContextType {
  todoList: ITodoItem[];
  handleAddTodo: (newTodo: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleUpdateTodoValue: ({ id, value }: ITodoItem) => void;
}

export const TodoListContext =  React.createContext<TodoListContextType>({
  todoList: [],
  handleAddTodo: () => {},
  handleDeleteTodo: () => {},
  handleUpdateTodoValue: () => {},
});

export const useTodoContext = () => React.useContext(TodoListContext);


