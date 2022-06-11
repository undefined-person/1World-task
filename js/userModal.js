import {
  buildNewTable,
  closeModal,
  createHTMLElement,
  createUserInput,
  generateId,
} from './utils.js'
import { addUser, getUsers } from './user.js'

const topBtn = document.querySelector('.top__btn')

topBtn.addEventListener('click', () => createUserModal())

const createUserModal = () => {
  let container = document.querySelector('.container')

  const modal = createHTMLElement('div', 'modal')
  const userForm = createHTMLElement('form', 'userForm')

  createUserInput('name', 'Name', userForm)
  createUserInput('username', 'Username', userForm)
  createUserInput('email', 'Email', userForm)
  createUserInput('website', 'Website', userForm)
  createUserInput('phone', 'Phone', userForm)
  createUserInput('street', 'Street', userForm)
  createUserInput('suite', 'Suite', userForm)
  createUserInput('city', 'City', userForm)
  createUserInput('company', 'Company name', userForm)

  const closeBtn = createHTMLElement('button', 'closeBtn', '✖')
  closeBtn.addEventListener('click', closeModal)

  const overlay = createHTMLElement('div', 'overlay')
  overlay.addEventListener('click', closeModal)

  const addUserBtn = createHTMLElement('button', 'add_btn')
  addUserBtn.innerText = 'Add user'
  addUserBtn.addEventListener('click', (e) => createUserItem(e))

  modal.appendChild(closeBtn)

  userForm.appendChild(addUserBtn)

  modal.appendChild(userForm)
  container.appendChild(modal)
  container.appendChild(overlay)
}

const createUserItem = (e) => {
  e.preventDefault()

  const userFrom = document.querySelector('.userForm')
  const nameInputValue = document.getElementById('name').value
  const usernameInputValue = document.getElementById('username').value
  const emailInputValue = document.getElementById('email').value
  const websiteInputValue = document.getElementById('website').value
  const phoneInputValue = document.getElementById('phone').value
  const streetInputValue = document.getElementById('street').value
  const companyInputValue = document.getElementById('company').value
  const suiteInputValue = document.getElementById('suite').value
  const cityInputValue = document.getElementById('suite').value

  const id = generateId()

  addUser({
    id,
    name: nameInputValue,
    username: usernameInputValue,
    email: emailInputValue,
    address: {
      street: streetInputValue,
      suite: suiteInputValue,
      city: cityInputValue,
    },
    phone: phoneInputValue,
    website: websiteInputValue,
    company: {
      name: companyInputValue,
    },
  })

  buildNewTable(getUsers())

  userFrom.reset()
}
