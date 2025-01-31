document.addEventListener('DOMContentLoaded', () => {
    // ... (previous code remains the same) ...

    // Charts
    const projectStatusCtx = document.getElementById('projectStatusChart').getContext('2d');
    const fundingByInstituteCtx = document.getElementById('fundingByInstituteChart').getContext('2d');

    // Project Status Chart
    new Chart(projectStatusCtx, {
        type: 'doughnut',
        data: {
            labels: ['Active', 'Completed', 'On Hold', 'Cancelled'],
            datasets: [{
                data: [65, 20, 10, 5],
                backgroundColor: [
                    '#28a745',
                    '#007bff',
                    '#ffc107',
                    '#dc3545'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Funding by Institute Chart
    new Chart(fundingByInstituteCtx, {
        type: 'bar',
        data: {
            labels: ['Institute A', 'Institute B', 'Institute C', 'Institute D', 'Institute E'],
            datasets: [{
                label: 'Funding Amount (in millions)',
                data: [4.5, 3.2, 5.7, 2.8, 3.9],
                backgroundColor: '#007bff'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Funding Amount (in millions)'
                    }
                }
            }
        }
    });

    // Recent Activity
    const activities = [
        {
            type: 'grant',
            action: 'New grant opportunity posted: AI Research Fund',
            time: '2 hours ago',
            icon: 'fas fa-gift'
        },
        {
            type: 'project',
            action: 'Project "Quantum Computing Advancements" sanctioned',
            time: '1 day ago',
            icon: 'fas fa-check-circle'
        },
        {
            type: 'report',
            action: 'Q2 2023 Quarterly Report generated',
            time: '3 days ago',
            icon: 'fas fa-file-alt'
        }
    ];

    const activityList = document.querySelector('.activity-list');
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <i class="${activity.icon}"></i>
            <div class="activity-details">
                <p>${activity.action}</p>
                <small>${activity.time}</small>
            </div>
        `;
        activityList.appendChild(activityItem);
    });

    // Modal Functionality
    const newGrantBtn = document.getElementById('newGrantBtn');
    const sanctionProjectBtn = document.getElementById('sanctionProjectBtn');
    const quarterlyReportBtn = document.getElementById('quarterlyReportBtn');

    const newGrantModal = document.getElementById('newGrantModal');
    const sanctionProjectModal = document.getElementById('sanctionProjectModal');
    const quarterlyReportModal = document.getElementById('quarterlyReportModal');

    const closeButtons = document.querySelectorAll('.close');

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    newGrantBtn.addEventListener('click', () => openModal(newGrantModal));
    sanctionProjectBtn.addEventListener('click', () => openModal(sanctionProjectModal));
    quarterlyReportBtn.addEventListener('click', () => openModal(quarterlyReportModal));

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal(button.closest('.modal'));
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });

    // Form Submissions
    const newGrantForm = document.getElementById('newGrantForm');
    const sanctionProjectForm = document.getElementById('sanctionProjectForm');
    const quarterlyReportForm = document.getElementById('quarterlyReportForm');

    newGrantForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle new grant submission
        console.log('New grant submitted:', {
            title: document.getElementById('grantTitle').value,
            description: document.getElementById('grantDescription').value,
            amount: document.getElementById('grantAmount').value,
            deadline: document.getElementById('grantDeadline').value
        });
        closeModal(newGrantModal);
    });

    sanctionProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle project sanction
        console.log('Project sanctioned:', {
            project: document.getElementById('projectSelect').value,
            amount: document.getElementById('sanctionAmount').value,
            notes: document.getElementById('sanctionNotes').value
        });
        closeModal(sanctionProjectModal);
    });

    quarterlyReportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle quarterly report generation
        console.log('Quarterly report generated:', {
            quarter: document.getElementById('reportQuarter').value,
            year: document.getElementById('reportYear').value
        });
        closeModal(quarterlyReportModal);
    });

    // Populate project select dropdown (mock data)
    const projectSelect = document.getElementById('projectSelect');
    const mockProjects = [
        'Quantum Computing Advancements',
        'AI in Healthcare',
        'Sustainable Energy Solutions',
        'Nanotechnology in Materials Science'
    ];

    mockProjects.forEach(project => {
        const option = document.createElement('option');
        option.value = project;
        option.textContent = project;
        projectSelect.appendChild(option);
    });
});