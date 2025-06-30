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

    const invDateInput = document.getElementById('inv-date');

    invDateInput.value = new Date().toISOString().split('T')[0];
    flatpickr("#inv-date", {

    });

    const paymentSelectionButton = document.getElementById('payment-method-select-button');
    const paymentSelectionMenuItems = document.getElementById('payment-method-select-menu');
    const paymentSelectionItem = document.querySelectorAll('.payment-method-select-item');

    paymentSelectionButton.addEventListener('click', () => {
        const isExpanded = paymentSelectionButton.getAttribute('aria-expanded') === 'true';
        paymentSelectionButton.setAttribute('aria-expanded', !isExpanded);

        if (paymentSelectionMenuItems.style.display === 'none') {
            paymentSelectionMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            paymentSelectionMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

    paymentSelectionItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            // Hide the dropdown menu after an item is clicked
            paymentSelectionMenuItems.style.display = 'none';
            paymentSelectionButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            paymentSelectionButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });

    document.addEventListener('click', (event) => {
        if ((!paymentSelectionButton.contains(event.target) && !paymentSelectionMenuItems.contains(event.target))) {
            paymentSelectionMenuItems.style.display = 'none';
            paymentSelectionButton.setAttribute('aria-expanded', 'false');
        }
    });


    const priceTypeSelectionButton = document.getElementById('price-type-select-button');
    const priceTypeSelectionMenuItems = document.getElementById('price-type-select-menu');
    const priceTypeSelectionItem = document.querySelectorAll('.price-type-select-item');

    priceTypeSelectionButton.addEventListener('click', () => {
        const isExpanded = priceTypeSelectionButton.getAttribute('aria-expanded') === 'true';
        priceTypeSelectionButton.setAttribute('aria-expanded', !isExpanded);

        if (priceTypeSelectionMenuItems.style.display === 'none') {
            priceTypeSelectionMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            priceTypeSelectionMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

    priceTypeSelectionItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            // Hide the dropdown menu after an item is clicked
            priceTypeSelectionMenuItems.style.display = 'none';
            priceTypeSelectionButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            priceTypeSelectionButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });

    document.addEventListener('click', (event) => {
        if ((!priceTypeSelectionButton.contains(event.target) && !priceTypeSelectionMenuItems.contains(event.target))) {
            priceTypeSelectionMenuItems.style.display = 'none';
            priceTypeSelectionButton.setAttribute('aria-expanded', 'false');
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