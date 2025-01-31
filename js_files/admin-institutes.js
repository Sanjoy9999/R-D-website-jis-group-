// admin-institutes.js
document.addEventListener("DOMContentLoaded", () => {
    const addInstituteBtn = document.getElementById("addInstituteBtn")
    const addInstituteModal = document.getElementById("addInstituteModal")
    const closeBtn = addInstituteModal.querySelector(".close")
    const addInstituteForm = document.getElementById("addInstituteForm")
    const instituteTable = document.getElementById("instituteTable").querySelector("tbody")
  
    // Open modal
    addInstituteBtn.onclick = () => {
      addInstituteModal.style.display = "block"
    }
  
    // Close modal
    closeBtn.onclick = () => {
      addInstituteModal.style.display = "none"
    }
  
    // Close modal when clicking outside
    window.onclick = (event) => {
      if (event.target == addInstituteModal) {
        addInstituteModal.style.display = "none"
      }
    }
  
    // Handle form submission
    addInstituteForm.onsubmit = (e) => {
      e.preventDefault()
      const instituteName = document.getElementById("instituteName").value
      const instituteLocation = document.getElementById("instituteLocation").value
  
      // Add new row to table
      const newRow = instituteTable.insertRow()
      newRow.innerHTML = `
              <td>${instituteName}</td>
              <td>${instituteLocation}</td>
              <td>0</td>
              <td>$0</td>
              <td>
                  <button onclick="viewInstitute(this)">View</button>
                  <button onclick="editInstitute(this)">Edit</button>
              </td>
          `
  
      // Close modal and reset form
      addInstituteModal.style.display = "none"
      addInstituteForm.reset()
    }
  })
  
  function viewInstitute(btn) {
    // Implement view functionality
    console.log("View institute", btn.parentNode.parentNode)
  }
  
  function editInstitute(btn) {
    // Implement edit functionality
    console.log("Edit institute", btn.parentNode.parentNode)
  }
  
  