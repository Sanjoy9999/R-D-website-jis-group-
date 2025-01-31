// admin-grant-opportunities.js
document.addEventListener("DOMContentLoaded", () => {
    const addGrantBtn = document.getElementById("addGrantBtn")
    const addGrantModal = document.getElementById("addGrantModal")
    const closeBtn = addGrantModal.querySelector(".close")
    const addGrantForm = document.getElementById("addGrantForm")
    const grantTable = document.getElementById("grantTable").querySelector("tbody")
  
    // Open modal
    addGrantBtn.onclick = () => {
      addGrantModal.style.display = "block"
    }
  
    // Close modal
    closeBtn.onclick = () => {
      addGrantModal.style.display = "none"
    }
  
    // Close modal when clicking outside
    window.onclick = (event) => {
      if (event.target == addGrantModal) {
        addGrantModal.style.display = "none"
      }
    }
  
    // Handle form submission
    addGrantForm.onsubmit = (e) => {
      e.preventDefault()
      const title = document.getElementById("grantTitle").value
      const amount = document.getElementById("grantAmount").value
      const deadline = document.getElementById("grantDeadline").value
  
      // Add new row to table
      const newRow = grantTable.insertRow()
      newRow.innerHTML = `
              <td>${title}</td>
              <td>$${amount}</td>
              <td>${deadline}</td>
              <td>Open</td>
              <td>
                  <button onclick="editGrant(this)">Edit</button>
                  <button onclick="deleteGrant(this)">Delete</button>
              </td>
          `
  
      // Close modal and reset form
      addGrantModal.style.display = "none"
      addGrantForm.reset()
    }
  })
  
  function editGrant(btn) {
    // Implement edit functionality
    console.log("Edit grant", btn.parentNode.parentNode)
  }
  
  function deleteGrant(btn) {
    // Implement delete functionality
    if (confirm("Are you sure you want to delete this grant opportunity?")) {
      btn.parentNode.parentNode.remove()
    }
  }
  
  