document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section")
  
    const animateSections = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (sectionTop < windowHeight * 0.75) {
          section.style.opacity = "1"
          section.style.transform = "translateY(0)"
        }
      })
    }
  
    window.addEventListener("scroll", animateSections)
    animateSections() // Initial call to animate visible sections
  
    // Add hover effect to buttons and links
    const buttons = document.querySelectorAll(".btn")
    const formLinks = document.querySelectorAll(".form-link")
  
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)"
      })
  
      button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)"
      })
    })
  
    formLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.style.textDecoration = "underline"
      })
  
      link.addEventListener("mouseleave", () => {
        link.style.textDecoration = "none"
      })
    })
  })
  
  