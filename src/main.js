import './styles.css'

function openModal(src) {
  const modal = document.getElementById('imageModal')
  const modalImg = document.getElementById('modalImage')
  if (!modal || !modalImg) return
  modal.style.display = 'flex'
  modalImg.src = src
}

function closeModal() {
  const modal = document.getElementById('imageModal')
  if (modal) modal.style.display = 'none'
}

// Expose for inline handlers
window.openModal = openModal
window.closeModal = closeModal

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

// Modal accessibility: focus management & ESC close
const modal = document.getElementById('imageModal')
const closeBtn = modal?.querySelector('.close')
let lastFocusedElement = null

function trapFocus(e) {
  if (!modal || modal.style.display !== 'flex') return
  if (e.key === 'Tab') {
    e.preventDefault()
    closeBtn?.focus()
  } else if (e.key === 'Escape') {
    closeModal()
  }
}

if (closeBtn) {
  closeBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      closeModal()
    }
  })
}

// Enhance openModal to handle focus
window.openModal = function (src) {
  lastFocusedElement = document.activeElement
  openModal(src)
  closeBtn?.focus()
  document.addEventListener('keydown', trapFocus)
}

window.closeModal = function () {
  closeModal()
  document.removeEventListener('keydown', trapFocus)
  if (lastFocusedElement) {
    lastFocusedElement.focus()
    lastFocusedElement = null
  }
}
