document.addEventListener("DOMContentLoaded", () => {
    const navSlide = () => {
      const burger = document.querySelector(".burger")
      const nav = document.querySelector(".nav-links")
      const navLinks = document.querySelectorAll(".nav-links li")
  
      burger.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("nav-active")
  
        // Animate Links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = ""
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
          }
        })
  
        // Burger Animation
        burger.classList.toggle("toggle")
      })
    }
  
    navSlide()
  
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
  
    // Add hover effect to announcements and projects
    const cards = document.querySelectorAll(".announcement, .project")
  
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)"
        card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)"
      })
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
        card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
      })
    })
  })
  
  