import { drawUserInfo } from './main.js'

export const createHTMLElement = (elementType, className, value) => {
  const elem = document.createElement(elementType)
  if (className) {
    elem.classList.add(className)
  }
  if (value) {
    elem.innerText = value
  }
  return elem
}

export const addModalRow = (modal, title, info) => {
  const row = createHTMLElement('div', 'row')

  row.appendChild(title)
  row.appendChild(info)

  modal.appendChild(row)
}

export const buildNewTable = (items) => {
  const rows = document.querySelectorAll('.table-row')
  for (let i = 0; i < rows.length; i++) {
    rows[i].parentNode.removeChild(rows[i])
  }
  items.forEach((item) => drawUserInfo(item))
}

export const closeModal = () => {
  document.querySelector('.modal').remove()
  document.querySelector('.overlay').remove()
}

export const generateId = () => {
  return Math.floor(Math.random() * 100)
}

export const createUserInput = (id, placeholder, form) => {
  const input = createHTMLElement('input', 'user_input')
  input.id = id
  input.placeholder = placeholder

  form.appendChild(input)
}
