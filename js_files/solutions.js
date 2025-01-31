// solutions.js
document.addEventListener("DOMContentLoaded", () => {
    const solutionCards = document.querySelectorAll(".solution-card")
  
    solutionCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)"
      })
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
      })
    })
  
    // Intersection Observer for case studies
    const caseStudies = document.querySelectorAll(".case-study")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1
            entry.target.style.transform = "translateX(0)"
          }
        })
      },
      { threshold: 0.1 },
    )
  
    caseStudies.forEach((study) => {
      study.style.opacity = 0
      study.style.transform = "translateX(-50px)"
      observer.observe(study)
    })
  })
  
  