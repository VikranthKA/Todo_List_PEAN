import {ITodo} from "../../models/Todo"
type TodoState = ITodo[]

export interface TodoAction {
    type:"ADD_TODO" | 'REMOVE_TODO' | 'TOGGLE_TODO' |"ALL_TODO";
    payload:any;
}

export const todoReducer = (state:TodoState,action:TodoAction):TodoState=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state,action.payload]
        case "REMOVE_TODO":
            return state.filter(todo=>todo.id !== action.payload);
        case 'TOGGLE_TODO':
            return state.map(todo=>todo.id===action.payload ? 
                {...todo,completed:!todo.completed}:todo
            )
        case "ALL_TODO":
            return action.payload
        default:
            return state
    }
}