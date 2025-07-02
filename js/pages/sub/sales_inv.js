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

    const warehouseSelectionButton = document.getElementById('warehouse-select-button');
    const warehouseSelectionMenuItems = document.getElementById('warehouse-select-menu');
    const warehouseSelectionItem = document.querySelectorAll('.warehouse-select-item');

    warehouseSelectionButton.addEventListener('click', () => {
        const isExpanded = warehouseSelectionButton.getAttribute('aria-expanded') === 'true';
        warehouseSelectionButton.setAttribute('aria-expanded', !isExpanded);

        if (warehouseSelectionMenuItems.style.display === 'none') {
            warehouseSelectionMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            warehouseSelectionMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

    warehouseSelectionItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            // Hide the dropdown menu after an item is clicked
            warehouseSelectionMenuItems.style.display = 'none';
            warehouseSelectionButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            warehouseSelectionButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });

    document.addEventListener('click', (event) => {
        if ((!warehouseSelectionButton.contains(event.target) && !warehouseSelectionMenuItems.contains(event.target))) {
            warehouseSelectionMenuItems.style.display = 'none';
            warehouseSelectionButton.setAttribute('aria-expanded', 'false');
        }
    });

    const billTypeSelectionButton = document.getElementById('bill-type-select-button');
    const billTypeSelectionMenuItems = document.getElementById('bill-type-select-menu');
    const billTypeSelectionItem = document.querySelectorAll('.bill-type-select-item');

    billTypeSelectionButton.addEventListener('click', () => {
        const isExpanded = billTypeSelectionButton.getAttribute('aria-expanded') === 'true';
        billTypeSelectionButton.setAttribute('aria-expanded', !isExpanded);

        if (billTypeSelectionMenuItems.style.display === 'none') {
            billTypeSelectionMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            billTypeSelectionMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

    billTypeSelectionItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            // Hide the dropdown menu after an item is clicked
            billTypeSelectionMenuItems.style.display = 'none';
            billTypeSelectionButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            billTypeSelectionButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });

    document.addEventListener('click', (event) => {
        if ((!billTypeSelectionButton.contains(event.target) && !billTypeSelectionMenuItems.contains(event.target))) {
            billTypeSelectionMenuItems.style.display = 'none';
            billTypeSelectionButton.setAttribute('aria-expanded', 'false');
        }
    });



    const invTable = document.getElementById("inv-table");
    const invTableBody = document.getElementById("inv-tbody");

    // Example data for the invoice table
    const invoiceData = [
        {
            "item_number": "001",
            "item_name": "لابتوب ديل XPS 15",
            "unit": "قطعة",
            "quantity": 2,
            "free": false,
            "price": 2500000.00,
            "discount_percentage": 5,
            "discount_amount": 2500.00,
            "total_after_discount": 47500.00,
            "tax_rate": 14,
            "tax_amount": 6650.00,
            "net_total": 54150.00,
            "description": "جهاز لابتوب متطور للأداء العالي."
        },
        {
            "item_number": "002",
            "item_name": "هارد ديسك خارجي 1TB",
            "unit": "قطعة",
            "quantity": 5,
            "free": true,
            "price": 1200.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 0.00,
            "tax_rate": 14,
            "tax_amount": 0.00,
            "net_total": 0.00,
            "description": "هدية مع كل 5 أجهزة لابتوب."
        },
        {
            "item_number": "003",
            "item_name": "شاشة سامسونج 27 بوصة",
            "unit": "قطعة",
            "quantity": 1,
            "free": false,
            "price": 6000.00,
            "discount_percentage": 10,
            "discount_amount": 600.00,
            "total_after_discount": 5400.00,
            "tax_rate": 14,
            "tax_amount": 756.00,
            "net_total": 6156.00,
            "description": "شاشة عالية الدقة للألعاب والعمل."
        },
        {
            "item_number": "004",
            "item_name": "ماوس لاسلكي لوجيتك",
            "unit": "قطعة",
            "quantity": 3,
            "free": false,
            "price": 350.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 1050.00,
            "tax_rate": 14,
            "tax_amount": 147.00,
            "net_total": 1197.00,
            "description": "ماوس مريح للاستخدام اليومي."
        },
        {
            "item_number": "005",
            "item_name": "لوحة مفاتيح ميكانيكية",
            "unit": "قطعة",
            "quantity": 1,
            "free": false,
            "price": 800.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 800.00,
            "tax_rate": 14,
            "tax_amount": 112.00,
            "net_total": 912.00,
            "description": "لوحة مفاتيح احترافية للكتابة والألعاب."
        },
        {
            "item_number": "001",
            "item_name": "لابتوب ديل XPS 15",
            "unit": "قطعة",
            "quantity": 2,
            "free": false,
            "price": 2500000.00,
            "discount_percentage": 5,
            "discount_amount": 2500.00,
            "total_after_discount": 47500.00,
            "tax_rate": 14,
            "tax_amount": 6650.00,
            "net_total": 54150.00,
            "description": "جهاز لابتوب متطور للأداء العالي."
        },
        {
            "item_number": "002",
            "item_name": "هارد ديسك خارجي 1TB",
            "unit": "قطعة",
            "quantity": 5,
            "free": true,
            "price": 1200.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 0.00,
            "tax_rate": 14,
            "tax_amount": 0.00,
            "net_total": 0.00,
            "description": "هدية مع كل 5 أجهزة لابتوب."
        },
        {
            "item_number": "003",
            "item_name": "شاشة سامسونج 27 بوصة",
            "unit": "قطعة",
            "quantity": 1,
            "free": false,
            "price": 6000.00,
            "discount_percentage": 10,
            "discount_amount": 600.00,
            "total_after_discount": 5400.00,
            "tax_rate": 14,
            "tax_amount": 756.00,
            "net_total": 6156.00,
            "description": "شاشة عالية الدقة للألعاب والعمل."
        },
        {
            "item_number": "004",
            "item_name": "ماوس لاسلكي لوجيتك",
            "unit": "قطعة",
            "quantity": 3,
            "free": false,
            "price": 350.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 1050.00,
            "tax_rate": 14,
            "tax_amount": 147.00,
            "net_total": 1197.00,
            "description": "ماوس مريح للاستخدام اليومي."
        },
        {
            "item_number": "005",
            "item_name": "لوحة مفاتيح ميكانيكية",
            "unit": "قطعة",
            "quantity": 1,
            "free": false,
            "price": 800.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 800.00,
            "tax_rate": 14,
            "tax_amount": 112.00,
            "net_total": 912.00,
            "description": "لوحة مفاتيح احترافية للكتابة والألعاب."
        },
        {
            "item_number": "001",
            "item_name": "لابتوب ديل XPS 15",
            "unit": "قطعة",
            "quantity": 2,
            "free": false,
            "price": 2500000.00,
            "discount_percentage": 5,
            "discount_amount": 2500.00,
            "total_after_discount": 47500.00,
            "tax_rate": 14,
            "tax_amount": 6650.00,
            "net_total": 54150.00,
            "description": "جهاز لابتوب متطور للأداء العالي."
        },
        {
            "item_number": "002",
            "item_name": "هارد ديسك خارجي 1TB",
            "unit": "قطعة",
            "quantity": 5,
            "free": true,
            "price": 1200.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 0.00,
            "tax_rate": 14,
            "tax_amount": 0.00,
            "net_total": 0.00,
            "description": "هدية مع كل 5 أجهزة لابتوب."
        },
        {
            "item_number": "003",
            "item_name": "شاشة سامسونج 27 بوصة",
            "unit": "قطعة",
            "quantity": 1,
            "free": false,
            "price": 6000.00,
            "discount_percentage": 10,
            "discount_amount": 600.00,
            "total_after_discount": 5400.00,
            "tax_rate": 14,
            "tax_amount": 756.00,
            "net_total": 6156.00,
            "description": "شاشة عالية الدقة للألعاب والعمل."
        },
        {
            "item_number": "004",
            "item_name": "ماوس لاسلكي لوجيتك",
            "unit": "قطعة",
            "quantity": 3,
            "free": false,
            "price": 350.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 1050.00,
            "tax_rate": 14,
            "tax_amount": 147.00,
            "net_total": 1197.00,
            "description": "ماوس مريح للاستخدام اليومي."
        },
        {
            "item_number": "005",
            "item_name": "لوحة مفاتيح ميكانيكية",
            "unit": "قطعة",
            "quantity": 1,
            "free": false,
            "price": 800.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 800.00,
            "tax_rate": 14,
            "tax_amount": 112.00,
            "net_total": 912.00,
            "description": "لوحة مفاتيح احترافية للكتابة والألعاب."
        },
        {
            "item_number": "001",
            "item_name": "لابتوب ديل XPS 15",
            "unit": "قطعة",
            "quantity": 2,
            "free": false,
            "price": 2500000.00,
            "discount_percentage": 5,
            "discount_amount": 2500.00,
            "total_after_discount": 47500.00,
            "tax_rate": 14,
            "tax_amount": 6650.00,
            "net_total": 54150.00,
            "description": "جهاز لابتوب متطور للأداء العالي."
        },
        {
            "item_number": "002",
            "item_name": "هارد ديسك خارجي 1TB",
            "unit": "قطعة",
            "quantity": 5,
            "free": true,
            "price": 1200.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 0.00,
            "tax_rate": 14,
            "tax_amount": 0.00,
            "net_total": 0.00,
            "description": "هدية مع كل 5 أجهزة لابتوب."
        },
        {
            "item_number": "003",
            "item_name": "شاشة سامسونج 27 بوصة",
            "unit": "قطعة",
            "quantity": 1,
            "free": false,
            "price": 6000.00,
            "discount_percentage": 10,
            "discount_amount": 600.00,
            "total_after_discount": 5400.00,
            "tax_rate": 14,
            "tax_amount": 756.00,
            "net_total": 6156.00,
            "description": "شاشة عالية الدقة للألعاب والعمل."
        },
        {
            "item_number": "004",
            "item_name": "ماوس لاسلكي لوجيتك",
            "unit": "قطعة",
            "quantity": 3,
            "free": false,
            "price": 350.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 1050.00,
            "tax_rate": 14,
            "tax_amount": 147.00,
            "net_total": 1197.00,
            "description": "ماوس مريح للاستخدام اليومي."
        },
        {
            "item_number": "005",
            "item_name": "لوحة مفاتيح ميكانيكية",
            "unit": "قطعة",
            "quantity": 1,
            "free": false,
            "price": 800.00,
            "discount_percentage": 0,
            "discount_amount": 0.00,
            "total_after_discount": 800.00,
            "tax_rate": 14,
            "tax_amount": 112.00,
            "net_total": 912.00,
            "description": "لوحة مفاتيح احترافية للكتابة والألعاب."
        }
    ];

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

    invoiceData.forEach((sale) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="py-3 border px-1.5">${sale.item_number}</td>
            <td class="py-3 border px-1.5">${sale.item_name}</td>
            <td class="py-3 border px-1.5"> <button type="button" id="unit-select-button"
                                class="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-1 py-1.5 text-xs "
                                aria-expanded="true" aria-haspopup="true">
                                <span class="block truncate"> ${sale.unit} </span>
                                <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button></td>
            <td class="py-3 border px-1.5"><input class="w-18 rounded-md border border-gray-300 shadow-sm px-1 py-1.5 text-xs" type="number" value="${sale.quantity}"></td>
            <td class="py-3 border px-1.5"><input class="w-18 rounded-md border border-gray-300 shadow-sm px-1 py-1.5 text-xs" type="number" value="${sale.free}"></td>
            <td class="py-3 border px-1.5"><input class="w-25 rounded-md border border-gray-300 shadow-sm px-1 py-1.5 text-xs" type="number" value="${sale.price.toFixed(2)}"></td>
            <td class="py-3 border px-1.5"><input class="w-18 rounded-md border border-gray-300 shadow-sm px-1 py-1.5 text-xs" type="number" value="${sale.discount_percentage.toFixed(2)}"></td>
            <td class="py-3 border px-1.5"><input class="w-22 rounded-md border border-gray-300 shadow-sm px-1 py-1.5 text-xs" type="number" value="${sale.discount_amount.toFixed(2)}"></td>
            <td class="py-3 border px-1.5">${sale.total_after_discount.toFixed(2)}</td>
            <td class="py-3 border px-1.5"><input class="w-15 rounded-md border border-gray-300 shadow-sm px-1 py-1.5 text-xs" type="number" value="${sale.tax_rate.toFixed(2)}"></td>
            <td class="py-3 border px-1.5"><input class="w-20 rounded-md border border-gray-300 shadow-sm px-1 py-1.5 text-xs" type="number" value="${sale.tax_amount.toFixed(2)}"></td>
            <td class="py-3 border px-1.5">${sale.net_total.toFixed(2)}</td>
            <td class="py-3 border px-1"><input class="overflow-ellipsis focus:outline-none text-xs" type="text" value="${sale.description}"></td>
        `;
        invTableBody.appendChild(row);
    });


    const categoriesToggle = document.getElementById('categories-toggle');
    const categoriesContainer = document.getElementById('categories');

    categoriesToggle.addEventListener('click', () => {
        if (categoriesContainer.classList.contains('w-0')) {
            categoriesContainer.classList.remove('w-0');
            categoriesContainer.classList.add('w-1/2');
            // categoriesContainer.classList.add('max-md:w-50');
            invTable.classList.add('w-[150%]');
        } else {
            categoriesContainer.classList.add('w-0');
            categoriesContainer.classList.remove('w-1/2');
            // categoriesContainer.classList.remove('max-md:w-50');
            invTable.classList.remove('w-[150%]');
        }

    });
});