import axios from 'axios'

export const request = axios.create()

/**
 *
 * @param {number} id 传入id
 * @param {object} params 参数
 * @returns 返回id
 */
export function getList(id: number, params?: { page?: number }) {
  console.log(id, params)
  return id
}
