// admin-projects.js
document.addEventListener("DOMContentLoaded", () => {
    const sanctionProjectBtn = document.getElementById("sanctionProjectBtn")
    const sanctionProjectModal = document.getElementById("sanctionProjectModal")
    const closeBtn = sanctionProjectModal.querySelector(".close")
    const sanctionProjectForm = document.getElementById("sanctionProjectForm")
    const projectTable = document.getElementById("projectTable").querySelector("tbody")
    const instituteSelect = document.getElementById("instituteSelect")
  
    // Populate institute select (mock data)
    const institutes = ["Institute A", "Institute B", "Institute C"]
    institutes.forEach((institute) => {
      const option = document.createElement("option")
      option.value = institute
      option.textContent = institute
      instituteSelect.appendChild(option)
    })
  
    // Open modal
    sanctionProjectBtn.onclick = () => {
      sanctionProjectModal.style.display = "block"
    }
  
    // Close modal
    closeBtn.onclick = () => {
      sanctionProjectModal.style.display = "none"
    }
  
    // Close modal when clicking outside
    window.onclick = (event) => {
      if (event.target == sanctionProjectModal) {
        sanctionProjectModal.style.display = "none"
      }
    }
  
    // Handle form submission
    sanctionProjectForm.onsubmit = (e) => {
      e.preventDefault()
      const projectName = document.getElementById("projectName").value
      const institute = document.getElementById("instituteSelect").value
      const startDate = document.getElementById("startDate").value
      const endDate = document.getElementById("endDate").value
  
      // Add new row to table
      const newRow = projectTable.insertRow()
      newRow.innerHTML = `
              <td>${projectName}</td>
              <td>${institute}</td>
              <td>${startDate}</td>
              <td>${endDate}</td>
              <td>Active</td>
              <td>
                  <button onclick="viewProject(this)">View</button>
                  <button onclick="editProject(this)">Edit</button>
              </td>
          `
  
      // Close modal and reset form
      sanctionProjectModal.style.display = "none"
      sanctionProjectForm.reset()
    }
  })
  
  function viewProject(btn) {
    // Implement view functionality
    console.log("View project", btn.parentNode.parentNode)
  }
  
  function editProject(btn) {
    // Implement edit functionality
    console.log("Edit project", btn.parentNode.parentNode)
  }
  
  