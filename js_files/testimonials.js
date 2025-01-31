// testimonials.js
document.addEventListener("DOMContentLoaded", () => {
    const testimonialCards = document.querySelectorAll(".testimonial-card")
  
    testimonialCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)"
      })
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)"
      })
    })
  
    // Video modal functionality
    const videoButton = document.querySelector(".video-button")
    const videoModal = document.querySelector(".video-modal")
    const closeModal = document.querySelector(".close-modal")
  
    if (videoButton && videoModal && closeModal) {
      videoButton.addEventListener("click", () => {
        videoModal.style.display = "flex"
      })
  
      closeModal.addEventListener("click", () => {
        videoModal.style.display = "none"
      })
  
      window.addEventListener("click", (e) => {
        if (e.target === videoModal) {
          videoModal.style.display = "none"
        }
      })
    }
  })
  
  