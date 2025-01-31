document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const grantCards = document.querySelectorAll(".grant-card")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter")
  
        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
  
        // Filter grant cards
        grantCards.forEach((card) => {
          if (filter === "all" || card.classList.contains(filter)) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, 10)
          } else {
            card.style.opacity = "0"
            card.style.transform = "translateY(20px)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        })
      })
    })
  
    // Express Interest button functionality
    const expressInterestButtons = document.querySelectorAll(".express-interest-btn")
  
    expressInterestButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        if (!e.target.disabled) {
          const grantTitle = e.target.closest(".grant-card").querySelector("h2").textContent
          alert(`You have expressed interest in the "${grantTitle}" grant. Our team will contact you soon.`)
        }
      })
    })
  })
  
  