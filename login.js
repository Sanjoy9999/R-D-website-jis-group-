document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form")
    const forgotPasswordLink = document.getElementById("forgot-password-link")
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const facultyId = document.getElementById("faculty-id").value
      const password = document.getElementById("password").value
  
      // Here you would typically send a request to your server to authenticate the user
      // For this example, we'll just log the values and show an alert
      console.log("Faculty ID:", facultyId)
      console.log("console.log('Faculty ID:", facultyId)
      console.log("Password:", password)
  
      // Simulate authentication
      setTimeout(() => {
        alert("Login successful!")
        // Redirect to dashboard or home page
        window.location.href = "index.html"
      }, 1000)
    })
  
    forgotPasswordLink.addEventListener("click", (e) => {
      e.preventDefault()
      const facultyId = prompt("Please enter your Faculty ID to reset your password:")
      if (facultyId) {
        // Here you would typically send a request to your server to initiate the password reset process
        // For this example, we'll just show an alert
        alert(`A password reset link has been sent to the email associated with Faculty ID: ${facultyId}`)
      }
    })
  
    // Add animation to form elements
    const formElements = document.querySelectorAll(".form-group, .btn, .forgot-password")
    formElements.forEach((element, index) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      setTimeout(
        () => {
          element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        },
        100 * (index + 1),
      )
    })
  })
  
  