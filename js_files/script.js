// Main script.js
document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active")
      burger.classList.toggle("toggle")
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Newsletter form submission
    const newsletterForm = document.querySelector(".newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
        // Add your newsletter subscription logic here
        alert("Thank you for subscribing to our newsletter!")
        this.reset()
      })
    }
  })
  
  