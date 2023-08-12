import axios from "axios";
import { ItodoList } from "../component/Context";


let url = 'http://192.168.178.22:4000/'

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