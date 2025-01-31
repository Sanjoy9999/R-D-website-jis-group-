// partners.js
document.addEventListener("DOMContentLoaded", () => {
    const partnerCards = document.querySelectorAll(".partner-card")
  
    partnerCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)"
      })
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
      })
    })
  })
  
  