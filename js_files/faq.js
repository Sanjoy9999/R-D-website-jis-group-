// faq.js
document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion")
  
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", function () {
        this.classList.toggle("active")
        const panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px"
        }
      })
    })
  
    // Search functionality
    const searchInput = document.querySelector("#faq-search")
    const faqItems = document.querySelectorAll(".faq-item")
  
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase()
        faqItems.forEach((item) => {
          const question = item.querySelector(".accordion").textContent.toLowerCase()
          const answer = item.querySelector(".panel").textContent.toLowerCase()
          if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      })
    }
  })
  
  