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
