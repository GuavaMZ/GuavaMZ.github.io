document.addEventListener("DOMContentLoaded", function () {
    const branchSelectionButton = document.getElementById('branch-select-button');
    const branchSelectionMenuItems = document.getElementById('branch-select-menu');
    const branchSelectionItem = document.querySelectorAll('.branch-selection-item');

    branchSelectionButton.addEventListener('click', () => {
        const isExpanded = branchSelectionButton.getAttribute('aria-expanded') === 'true';
        branchSelectionButton.setAttribute('aria-expanded', !isExpanded);

        if (branchSelectionMenuItems.style.display === 'none') {
            branchSelectionMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            branchSelectionMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

    branchSelectionItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            // Hide the dropdown menu after an item is clicked
            branchSelectionMenuItems.style.display = 'none';
            branchSelectionButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            branchSelectionButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });

     document.addEventListener('click', (event) => {
        if ((!branchSelectionButton.contains(event.target) && !branchSelectionMenuItems.contains(event.target))) {
            branchSelectionMenuItems.style.display = 'none';
            branchSelectionButton.setAttribute('aria-expanded', 'false');
        }
    });

    
    // const salesTable = document.getElementById("sales-table");
    // const salesData = [
    //     {
    //         id: 1,
    //         customer: "عميل 1",
    //         date: "2023-01-01",
    //         total: 100,
    //     },
    //     {
    //         id: 2,
    //         customer: "عميل 2",
    //         date: "2023-01-02",
    //         total: 200,
    //     },
    //     {
    //         id: 3,
    //         customer: "عميل 3",
    //         date: "2023-01-03",
    //         total: 300,
    //     },
    // ];

    // salesData.forEach((sale) => {
    //     const row = document.createElement("tr");
    //     row.innerHTML = `
    //         <td>${sale.id}</td>
    //         <td>${sale.customer}</td>
    //         <td>${sale.date}</td>
    //         <td>${sale.total}</td>
    //     `;
    //     salesTable.appendChild(row);
    // });
});