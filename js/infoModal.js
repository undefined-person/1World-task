import { addModalRow, closeModal, createHTMLElement } from './utils.js'

export const createInfoModal = (additionalInfo) => {
  let container = document.querySelector('.container')

  const modal = createHTMLElement('div', 'modal')
  const infoModalWrapper = createHTMLElement('div', 'info-modal__wrapper')

  const id = createHTMLElement('h3', 'info-modal__title', 'ID')
  const idInfo = createHTMLElement(
    'span',
    'info-modal__info',
    additionalInfo.id
  )

  const phone = createHTMLElement('h3', 'info-modal__title', 'Phone')
  const phoneInfo = createHTMLElement(
    'span',
    'info-modal__info',
    additionalInfo.phone
  )

  const street = createHTMLElement('h3', 'info-modal__title', 'Street')
  const streetInfo = createHTMLElement(
    'span',
    'info-modal__info',
    additionalInfo.address.street
  )

  const suite = createHTMLElement('h3', 'info-modal__title', 'Suite')
  const suiteInfo = createHTMLElement(
    'span',
    'info-modal__info',
    additionalInfo.address.suite
  )

  const city = createHTMLElement('h3', 'info-modal__title', 'City')
  const cityInfo = createHTMLElement(
    'span',
    'info-modal__info',
    additionalInfo.address.city
  )

  const companyName = createHTMLElement(
    'h3',
    'info-modal__title',
    'Company name'
  )
  const companyNameInfo = createHTMLElement(
    'span',
    'info-modal__info',
    additionalInfo.company.name
  )

  addModalRow(infoModalWrapper, id, idInfo)
  addModalRow(infoModalWrapper, phone, phoneInfo)
  addModalRow(infoModalWrapper, street, streetInfo)
  addModalRow(infoModalWrapper, suite, suiteInfo)
  addModalRow(infoModalWrapper, city, cityInfo)
  addModalRow(infoModalWrapper, companyName, companyNameInfo)

  const closeBtn = createHTMLElement('button', 'closeBtn', '✖')
  closeBtn.addEventListener('click', closeModal)

  const overlay = createHTMLElement('div', 'overlay')
  overlay.addEventListener('click', closeModal)

  modal.appendChild(closeBtn)
  modal.appendChild(infoModalWrapper)

  container.appendChild(modal)
  container.appendChild(overlay)
}
