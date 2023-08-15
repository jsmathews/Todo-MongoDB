import axios from "axios";
import { ItodoList } from "../component/Context";


let url = 'http://localhost:4000/'

export interface IGetTodo {
    (): Promise<ItodoList[]>
}

export const getTodo: IGetTodo = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get(url + 'getTodo');
            resolve(response.data)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

export interface IGetDone {
    (): Promise<ItodoList[]>
}

export const getDone: IGetDone = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get(url + 'getDone');
            resolve(response.data)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}


export interface ISaveTodo {
    (text: string): Promise<{ _id: string, text: string }>
}

export const saveTodo: ISaveTodo = (text) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(url + 'saveTodo', { text });
            resolve(response.data)
        } catch (error) {
            reject(error)
            console.log(error)
        }

    })
}

export interface IMoveToDone {
    (_id: string): Promise<{ _id: string, text: string }>
}

export const moveToDone: IMoveToDone = (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(url + 'moveToDone', { _id });
            resolve(response.data)
        } catch (error) {
            reject(error)
            console.log(error)
        }

    })
}

export interface IMoveToTodo {
    (_id: string): Promise<{ _id: string, text: string }>
}

export const moveToTodo: IMoveToTodo = (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(url + 'moveToTodo', { _id });
            resolve(response.data)
        } catch (error) {
            reject(error)
            console.log(error)
        }

    })
}

export interface IDeleteTodo {
    (_id: string): Promise<string>
}

export const deleteTodo: IDeleteTodo = (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(url + 'deleteTodo', { _id });
            resolve(response.data)
        } catch (error) {
            reject(error)
            console.log(error)
        }

    })
}

export interface IUpdateTodo {
    (_id: string, text: string): Promise<{ _id: string, text: string }>
}

export const updateTodo: IUpdateTodo = (_id, text) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(url + 'updateTodo', { _id, text });
            resolve(response.data)
        } catch (error) {
            reject(error)
            console.log(error)
        }

    })
}