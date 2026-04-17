
import * as React from 'react'
import { EditTodo, type EditTodoProps } from "./EditTodo";
import { StyledTodoItem, EditButton, DeleteButton, StyledButtons } from "./TodoItem.styled"
import type {ITodoItem} from "./types"; 



interface TodoItemProps extends Pick<EditTodoProps, "handleUpdateTodoValue"> {
    todo: ITodoItem;

    deleteTodoItemFn: (id: string) => void;
}

export const TodoItem = ({ todo, deleteTodoItemFn, handleUpdateTodoValue }: TodoItemProps) => {
    const [isEditing, setIsEditing] = React.useState(false);


    // const [charCount, setCharCount] =  React.useState(0);

    // React.useEffect(() => { 
    //     setCharCount(charCount+ 1);
    //  console.log(`TodoItem charCount, ${charCount}`);
    // });




    const handleDelete = () => {
        deleteTodoItemFn(todo.id)
    }


    const handleEditTodo = () => {
        setIsEditing(true)
        // setIsEditing(prevState => !prevState);
    }


    const handleCancelEditing = () => {
        setIsEditing(false);
    }

// before, dep update, on mount & re mount

    // onComponentMount
    // React.useEffect(() => {
    //     console.log(`TodoItem mounted, ${todo.value}`);
 

    //     // unmount - cleanup
    //     return () => {
    //         console.log(`TodoItem unmounted, ${todo.value}`);
    //     }
    // },[]);


 
 

    return (
        <StyledTodoItem>
            {
                isEditing ? <EditTodo handleCancelEditing={handleCancelEditing} todo={todo} handleUpdateTodoValue={handleUpdateTodoValue} /> : <span>{todo.value}</span>
            }
            <StyledButtons>
                <EditButton onClick={handleEditTodo}>
                    Edit
                </EditButton>

                <DeleteButton onClick={handleDelete}>
                    Delete
                </DeleteButton>
            </StyledButtons>
        </StyledTodoItem>
    )
}