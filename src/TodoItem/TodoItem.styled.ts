import styled from "styled-components";


export const StyledTodoItem = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: space-between;

    max-width: 600px;
    margin: 0 auto;
    padding: 14px 0;
    

    &:not(:last-child) {
        border-bottom: 1px solid ${(p) => p.theme.colors.border_color};
    }
`;



export const  StyledButtons = styled.div`
display: flex;
    gap: 12px;
`

const BaseButton = styled.button`
    outline: 0;
    background-color: white;
    border: none;
    cursor: pointer; 

`

export const EditButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.colors.primary_light }

`
export const DeleteButton = styled(BaseButton)`
background-color: transparent;
border: 1px solid red;
padding: 4px 6px;
border-radius: 4px;
`



export const StyledEditTodo = styled.div`
display: flex;
gap: 4px;    

`

export const StyledEditTodoButtons = styled.div`
display: flex;
gap: 4px;    

`


export const StyledInput =  styled.input`
    width: 240px;
    padding: 4px;
`;
 