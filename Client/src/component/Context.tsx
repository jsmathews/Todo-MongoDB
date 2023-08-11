import { ReactNode, createContext, useContext, useState } from 'react';

interface ItodoList {
    id: string,
    content: string
}

interface ITodoCreateContext {
    newTodo: ItodoList[],
    completedTodo: ItodoList[],
}

export var TodoCreateContext = createContext<ITodoCreateContext | undefined>(undefined);

interface ITodoContextProviderProps {
    children: ReactNode;
}

export function TodoContextProvider({ children }: ITodoContextProviderProps) {

    var [newTodo, setNewTodo] = useState<ItodoList[]>([]);
    var [completedTodo, setCompletedTodo] = useState<ItodoList[]>([]);

    return (
        <TodoCreateContext.Provider value={{ newTodo, completedTodo }}>
            {children}
        </TodoCreateContext.Provider>
    );
}

export var TodoUseContext = () => useContext(TodoCreateContext) as ITodoCreateContext;


