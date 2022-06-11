import { buildNewTable } from './utils.js'

let users = []

const fetchUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  return fetch(url)
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.error(error)
    })
}

export const setUsers = (newUsers) => {
  users = [...newUsers]
}

export const getUsers = () => {
  return users
}

export const addUser = (user) => {
  setUsers([...users, user])
}

export const deleteUser = (id) => {
  const filteredUsers = users.filter((user) => user.id !== id)
  setUsers(filteredUsers)
  buildNewTable(users)
}

setUsers(await fetchUsers())
