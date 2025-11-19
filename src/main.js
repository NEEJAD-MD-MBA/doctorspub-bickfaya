import './styles.css'

const modal = document.getElementById('imageModal')
const modalImg = document.getElementById('modalImage')
const closeBtn = modal?.querySelector('.close')
const basePath = import.meta.env?.BASE_URL ?? '/'
let lastFocusedElement = null

function resolveAssetPath(src) {
  if (!src) return ''
  if (/^(?:[a-z]+:)?\/\//i.test(src)) return src
  if (src.startsWith(basePath)) return src
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`
  const normalizedSrc = src.replace(/^\//, '')
  return `${normalizedBase}${normalizedSrc}`
}

function showModal(src) {
  if (!modal || !modalImg) return
  modal.style.display = 'flex'
  modalImg.src = resolveAssetPath(src)
}

function hideModal() {
  if (modal) {
    modal.style.display = 'none'
  }
}

function trapFocus(e) {
  if (!modal || modal.style.display !== 'flex') return
  if (e.key === 'Tab') {
    e.preventDefault()
    closeBtn?.focus()
  } else if (e.key === 'Escape') {
    handleModalClose()
  }
}

function handleModalOpen(src) {
  lastFocusedElement = document.activeElement
  showModal(src)
  closeBtn?.focus()
  document.addEventListener('keydown', trapFocus)
}

function handleModalClose() {
  hideModal()
  document.removeEventListener('keydown', trapFocus)
  if (lastFocusedElement) {
    lastFocusedElement.focus()
    lastFocusedElement = null
  }
}

if (closeBtn) {
  closeBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleModalClose()
    }
  })
}

window.openModal = handleModalOpen
window.closeModal = handleModalClose

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')
    if (!href) return
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// Mobile navigation toggle
const menuToggle = document.querySelector('.menu-toggle')
const navList = document.getElementById('primary-nav')
if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open')
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
  })
}
