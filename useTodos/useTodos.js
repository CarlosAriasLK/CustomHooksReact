import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = () => {
    
    const init = () => {
        return JSON.parse( localStorage.getItem('todos') ) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo,
        });         
    };

    const handleDeleteTodo = ( id ) => {
        dispatch ({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch ({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done ).length,
    }


} 