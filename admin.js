// Import Chart.js library.  This assumes Chart.js is included in your project.  If not, you'll need to include it via a <script> tag in your HTML.
import Chart from "chart.js"

document.addEventListener("DOMContentLoaded", () => {
  // Project Overview Chart
  const ctx = document.getElementById("projectChart").getContext("2d")
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Active", "Completed", "Pending"],
      datasets: [
        {
          data: [18, 12, 7],
          backgroundColor: ["#3498db", "#2ecc71", "#f39c12"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  })

  // Grant Management Actions
  const postGrantBtn = document.getElementById("postGrant")
  const updateGrantBtn = document.getElementById("updateGrant")

  postGrantBtn.addEventListener("click", () => {
    alert("Redirecting to post new grant form...")
    // Implement redirection or modal for posting new grant
  })

  updateGrantBtn.addEventListener("click", () => {
    alert("Redirecting to update existing grant form...")
    // Implement redirection or modal for updating existing grant
  })

  // Add hover effect to dashboard items
  const dashboardItems = document.querySelectorAll(".dashboard-item")
  dashboardItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-10px)"
      item.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)"
    })

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)"
      item.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
    })
  })

  // Animate progress bars
  const progressBars = document.querySelectorAll(".progress")
  progressBars.forEach((bar) => {
    const width = bar.style.width
    bar.style.width = "0"
    setTimeout(() => {
      bar.style.width = width
    }, 500)
  })

  // Add click event for view report buttons
  const viewReportBtns = document.querySelectorAll(".btn-small")
  viewReportBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const action = e.target.textContent
      const projectId = e.target.closest("tr").querySelector("td:first-child").textContent
      alert(`${action} for project ${projectId}`)
      // Implement view report functionality
    })
  })
})

