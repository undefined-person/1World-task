import { createInfoModal } from './infoModal.js'
import { createHTMLElement } from './utils.js'
import { getUsers, deleteUser } from './user.js'

const tableContent = document.querySelector('.table__content')

export const drawUserInfo = (info) => {
  const { id, address, phone, company, name, username, email, website } = info

  const tableRow = createHTMLElement('div', 'table-row')
  const deleteBtn = createHTMLElement('button', 'delete__btn', 'Delete')

  tableRow.addEventListener('click', () =>
    createInfoModal({ id, address, phone, company })
  )

  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    deleteUser(id)
  })

  Object.values({ name, username, email, website }).forEach((elem) => {
    const tableData = createHTMLElement('div', 'table-data', elem)
    tableRow.appendChild(tableData)
    tableRow.appendChild(deleteBtn)
  })

  tableContent.appendChild(tableRow)
}

getUsers().forEach((user) => {
  drawUserInfo(user)
})
