import axios from 'axios'

export const request = axios.create()

export function getList(id: number, params?: { page?: number }) {
    console.log(id, params)
    return id
}
