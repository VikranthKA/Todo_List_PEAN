import React,{
    createContext,ReactNode,Dispatch,
    useReducer
} from 'react';
import { ITodo } from '../../models/Todo';
import { TodoAction, todoReducer } from '../reducers/todoReducer';

type TodoState = ITodo[];
const initialState:TodoState = []


interface TodoContextType {
    todos:TodoState,
    dispatch:Dispatch<TodoAction>;

}

const TodoContext  = createContext<TodoContextType | undefined>(undefined)


interface TodoProviderProps{
    children:ReactNode
}


const TodoProvider:React.FC<TodoProviderProps> = ({children})=>{
    const [todos,dispatch]  = useReducer(todoReducer,initialState)
    return(
        <TodoContext.Provider value={{todos,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodos = ()=>{
    const context = React.useContext(TodoContext);
    if(context === undefined){
        throw new Error('Error in todos')
    }
    return context
}

export {
    TodoProvider,useTodos
}