document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm")
    const registerForm = document.getElementById("registerForm")
    const forgotPasswordForm = document.getElementById("forgotPasswordForm")
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
  
        // Add your login logic here
        console.log("Login attempt:", { email, password })
        alert("Login functionality will be implemented here.")
      })
    }
  
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const fullName = document.getElementById("fullName").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirmPassword").value
        const institute = document.getElementById("institute").value
  
        if (password !== confirmPassword) {
          showError("confirmPassword", "Passwords do not match")
          return
        }
  
        // Add your registration logic here
        console.log("Registration attempt:", { fullName, email, password, institute })
        alert("Registration functionality will be implemented here.")
      })
    }
  
    if (forgotPasswordForm) {
      forgotPasswordForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = document.getElementById("email").value
  
        // Add your forgot password logic here
        console.log("Password reset requested for:", email)
        alert("Password reset functionality will be implemented here.")
      })
    }
  
    function showError(inputId, message) {
      const input = document.getElementById(inputId)
      const errorElement = document.createElement("div")
      errorElement.className = "error-message"
      errorElement.textContent = message
      input.parentNode.appendChild(errorElement)
  
      setTimeout(() => {
        errorElement.remove()
      }, 3000)
    }
  })
  
  