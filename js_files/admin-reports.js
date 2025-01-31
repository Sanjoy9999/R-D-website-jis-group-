// admin-reports.js
document.addEventListener("DOMContentLoaded", () => {
    const generateReportBtn = document.getElementById("generateReportBtn")
    const reportType = document.getElementById("reportType")
    const dateRange = document.getElementById("dateRange")
    const reportChart = document.getElementById("reportChart")
    const reportSummaryText = document.getElementById("reportSummaryText")
  
    // Import Chart.js library.  This assumes Chart.js is included in your HTML file via a <script> tag.
    // If not, you'll need to include it.  For example: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  
    let chart
  
    generateReportBtn.onclick = () => {
      const selectedReportType = reportType.value
      const selectedDateRange = dateRange.value
  
      // Clear previous chart if exists
      if (chart) {
        chart.destroy()
      }
  
      // Generate report based on selected type and date range
      switch (selectedReportType) {
        case "projectStatus":
          generateProjectStatusReport(selectedDateRange)
          break
        case "fundingByInstitute":
          generateFundingByInstituteReport(selectedDateRange)
          break
        case "projectTimeline":
          generateProjectTimelineReport(selectedDateRange)
          break
      }
    }
  
    function generateProjectStatusReport(dateRange) {
      // Mock data - replace with actual data fetching logic
      const data = {
        labels: ["Active", "Completed", "On Hold", "Cancelled"],
        datasets: [
          {
            data: [12, 19, 3, 5],
            backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#F44336"],
          },
        ],
      }
  
      chart = new Chart(reportChart, {
        type: "pie",
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Project Status Report",
            },
          },
        },
      })
  
      reportSummaryText.textContent = `Total projects: ${data.datasets[0].data.reduce((a, b) => a + b, 0)}. 
              Most projects are currently active.`
    }
  
    function generateFundingByInstituteReport(dateRange) {
      // Mock data - replace with actual data fetching logic
      const data = {
        labels: ["Institute A", "Institute B", "Institute C", "Institute D", "Institute E"],
        datasets: [
          {
            label: "Funding Amount ($)",
            data: [12000, 19000, 3000, 5000, 2000],
            backgroundColor: "#2196F3",
          },
        ],
      }
  
      chart = new Chart(reportChart, {
        type: "bar",
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Funding by Institute Report",
            },
          },
        },
      })
  
      reportSummaryText.textContent = `Total funding: $${data.datasets[0].data.reduce((a, b) => a + b, 0)}. 
              Institute B has received the most funding.`
    }
  
    function generateProjectTimelineReport(dateRange) {
      // Mock data - replace with actual data fetching logic
      const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Started Projects",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "#4CAF50",
            fill: false,
          },
          {
            label: "Completed Projects",
            data: [2, 3, 5, 7, 11, 13],
            borderColor: "#2196F3",
            fill: false,
          },
        ],
      }
  
      chart = new Chart(reportChart, {
        type: "line",
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Project Timeline Report",
            },
          },
        },
      })
  
      reportSummaryText.textContent = `Total started projects: ${data.datasets[0].data.reduce((a, b) => a + b, 0)}. 
              Total completed projects: ${data.datasets[1].data.reduce((a, b) => a + b, 0)}.`
    }
  })
  
  