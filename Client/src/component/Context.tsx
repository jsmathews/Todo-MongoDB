import { ReactNode, createContext, useContext, useState } from 'react';
import {
    saveTodo, ISaveTodo, IGetTodo, getTodo, IMoveToDone, moveToDone, IGetDone, getDone, IMoveToTodo, moveToTodo,
    IDeleteTodo, deleteTodo
} from '../httpMethods/HttpMethods';

export interface ItodoList {
    _id: string,
    text: string
}

interface ITodoCreateContext {
    newTodo: ItodoList[],
    setNewTodo: React.Dispatch<React.SetStateAction<ItodoList[]>>,
    completedTodo: ItodoList[],
    setCompletedTodo: React.Dispatch<React.SetStateAction<ItodoList[]>>,
    saveTodo: ISaveTodo,
    getTodo: IGetTodo,
    moveToDone: IMoveToDone,
    toggleTodo: boolean,
    setToggleTodo: React.Dispatch<React.SetStateAction<boolean>>,
    getDone: IGetDone,
    moveToTodo: IMoveToTodo,
    deleteTodo: IDeleteTodo
}

export var TodoCreateContext = createContext<ITodoCreateContext | undefined>(undefined);

interface ITodoContextProviderProps {
    children: ReactNode;
}

export function TodoContextProvider({ children }: ITodoContextProviderProps) {

    var [newTodo, setNewTodo] = useState<ItodoList[]>([]);
    var [completedTodo, setCompletedTodo] = useState<ItodoList[]>([]);
    var [toggleTodo, setToggleTodo] = useState<boolean>(true); // true-todo, false-done

    return (
        <TodoCreateContext.Provider value={{
            newTodo,
            setNewTodo,
            completedTodo,
            setCompletedTodo,
            saveTodo,
            getTodo,
            moveToDone,
            toggleTodo,
            setToggleTodo,
            getDone,
            moveToTodo,
            deleteTodo
        }}>
            {children}
        </TodoCreateContext.Provider>
    );
}

export var TodoUseContext = () => useContext(TodoCreateContext) as ITodoCreateContext;


