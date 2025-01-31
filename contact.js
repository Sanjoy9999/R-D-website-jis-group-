document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(contactForm)
      const formValues = Object.fromEntries(formData.entries())
  
      // Here you would typically send the form data to your server
      // For this example, we'll just log the values and show an alert
      console.log("Form submitted:", formValues)
  
      // Simulate form submission
      setTimeout(() => {
        alert("Thank you for your message. We will get back to you soon!")
        contactForm.reset()
      }, 1000)
    })
  
    // Add hover effect to contact cards
    const contactCards = document.querySelectorAll(".contact-card")
    contactCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)"
        card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)"
      })
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
        card.style.boxShadow = "none"
      })
    })
  
    // Add hover effect to FAQ items
    const faqItems = document.querySelectorAll(".faq-item")
    faqItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-5px)"
        item.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.1)"
      })
  
      item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0)"
        item.style.boxShadow = "none"
      })
    })
  
    // Animate sections on scroll
    const animateSections = () => {
      const sections = document.querySelectorAll("section")
  
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
  })
  
  