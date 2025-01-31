// admin-settings.js
document.addEventListener("DOMContentLoaded", () => {
    const generalSettingsForm = document.getElementById("generalSettingsForm")
    const notificationSettingsForm = document.getElementById("notificationSettingsForm")
    const securitySettingsForm = document.getElementById("securitySettingsForm")
  
    // Load saved settings (mock data - replace with actual data loading)
    document.getElementById("siteName").value = "Research Innovation Platform"
    document.getElementById("adminEmail").value = "admin@example.com"
    document.getElementById("dateFormat").value = "MM/DD/YYYY"
    document.getElementById("emailNotifications").checked = true
    document.getElementById("smsNotifications").checked = false
  
    generalSettingsForm.onsubmit = (e) => {
      e.preventDefault()
      const siteName = document.getElementById("siteName").value
      const adminEmail = document.getElementById("adminEmail").value
      const dateFormat = document.getElementById("dateFormat").value
  
      // Save general settings (replace with actual saving logic)
      console.log("General settings saved:", { siteName, adminEmail, dateFormat })
      alert("General settings saved successfully!")
    }
  
    notificationSettingsForm.onsubmit = (e) => {
      e.preventDefault()
      const emailNotifications = document.getElementById("emailNotifications").checked
      const smsNotifications = document.getElementById("smsNotifications").checked
  
      // Save notification settings (replace with actual saving logic)
      console.log("Notification settings saved:", { emailNotifications, smsNotifications })
      alert("Notification settings saved successfully!")
    }
  
    securitySettingsForm.onsubmit = (e) => {
      e.preventDefault()
      const currentPassword = document.getElementById("currentPassword").value
      const newPassword = document.getElementById("newPassword").value
      const confirmPassword = document.getElementById("confirmPassword").value
  
      if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match!")
        return
      }
  
      // Change password (replace with actual password change logic)
      console.log("Password change requested")
      alert("Password changed successfully!")
  
      // Reset form
      securitySettingsForm.reset()
    }
  })
  
  