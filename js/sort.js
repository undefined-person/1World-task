import { getUsers, setUsers } from './user.js'
import { buildNewTable } from './utils.js'

const headerItems = document.querySelectorAll('.header__item')
const itemsArray = [...headerItems]

headerItems.forEach((item) =>
  item.addEventListener('click', () => handleSort(item))
)

const handleSort = (item) => {
  let users = getUsers()
  let orderType = item.getAttribute('data-order') || ''
  let sortType = item.getAttribute('data-sort')

  clearSortAttribute(sortType)

  if (orderType === 'desc' || !orderType) {
    item.dataset.order = 'asc'
    setUsers(users.sort((a, b) => (a[sortType] > b[sortType] ? 1 : -1)))
  } else {
    item.dataset.order = 'desc'
    setUsers(users.sort((a, b) => (a[sortType] < b[sortType] ? 1 : -1)))
  }

  buildNewTable(users)
}

const clearSortAttribute = (currentItemSortType) => {
  itemsArray
    .filter((item) => item.getAttribute('data-sort') !== currentItemSortType)
    .forEach((item) => item.removeAttribute('data-order'))
}
