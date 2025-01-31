// pricing.js
document.addEventListener("DOMContentLoaded", () => {
    const pricingCards = document.querySelectorAll(".pricing-card")
  
    pricingCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)"
      })
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
      })
    })
  
    // Toggle annual/monthly pricing
    const pricingToggle = document.querySelector(".pricing-toggle")
    const annualPrices = document.querySelectorAll(".annual-price")
    const monthlyPrices = document.querySelectorAll(".monthly-price")
  
    if (pricingToggle) {
      pricingToggle.addEventListener("change", () => {
        if (pricingToggle.checked) {
          annualPrices.forEach((price) => (price.style.display = "none"))
          monthlyPrices.forEach((price) => (price.style.display = "block"))
        } else {
          annualPrices.forEach((price) => (price.style.display = "block"))
          monthlyPrices.forEach((price) => (price.style.display = "none"))
        }
      })
    }
  })
  
  