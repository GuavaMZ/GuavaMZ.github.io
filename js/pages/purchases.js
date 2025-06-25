document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenuItems = document.getElementById('dropdownMenuItems'); // Get the next sibling element (the dropdown menu)
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const bodyContentContainer = document.getElementById('systemContent'); // Container for dynamic content

    const searchInput = document.getElementById('searchInput');
    const pagesToSearchThrough = [
        '/pages/purchases_ops.html',
        '/pages/purchases_init.html',
        '/pages/purchases_reports.html',
    ];

    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);

        if (dropdownMenuItems.style.display === 'none') {
            dropdownMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            dropdownMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

     const searchContent = async () => {
        try {
            const parser = new DOMParser();
            // Use Promise.all to wait for all fetch operations to complete
            const fetchedContents = await Promise.all(pagesToSearchThrough.map(async page => {
                const response = await fetch(page);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status} from ${page}`);
                }
                return response.text();
            }));

            const combinedPagesHTMLContent = fetchedContents.join('');

            const doc = parser.parseFromString(combinedPagesHTMLContent, 'text/html');

            const mnuButtonsInContent = doc.querySelectorAll('.mnu-btn');

            let resultsHtml = ''; // Accumulator for HTML of matching buttons
            let foundMatch = false; // Flag to track if any match was found

            mnuButtonsInContent.forEach(button => {

                const buttonTextElement = button.children[0]?.children[1]; // Using optional chaining for safety

                if (buttonTextElement && buttonTextElement.textContent.includes(searchInput.value)) {
                    foundMatch = true;
                    // Append the outerHTML of the matching button to resultsHtml
                    resultsHtml += `<div class="found-button-wrapper">${button.outerHTML}</div>`;
                }
            });
            if (foundMatch) {
                bodyContentContainer.innerHTML = resultsHtml;
            } else {
                bodyContentContainer.innerHTML = `<p>لا يوجد نتائج مطابقة.</p>`;
            }
        } catch (error) {
            console.error("Failed to load content:", error);

            bodyContentContainer.innerHTML = `<p style="color: red;">Error searching content: ${error.message}. Please try again.</p>`;
        }
    };

    searchInput.addEventListener('input', searchContent);


    // Optional: Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !dropdownMenuItems.contains(event.target)) {
            dropdownMenuItems.style.display = 'none';
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });

    const loadContent = async (contentFile, scriptFile = null) => {
        try {
            const response = await fetch(contentFile);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const content = await response.text();
            bodyContentContainer.innerHTML = content;

            // Load JavaScript file if provided
            if (scriptFile) {
                const existingScript = document.getElementById('dynamic-script');
                if (existingScript) {
                    existingScript.remove();
                }

                const script = document.createElement('script');
                script.src = scriptFile;
                script.type = 'module'; // Adjust based on your script type
                script.id = 'dynamic-script';
                script.onload = () => {
                    console.log(`Script ${scriptFile} loaded successfully.`);
                };
                script.onerror = (e) => {
                    console.error(`Error loading script ${scriptFile}:`, e);
                };
                document.body.appendChild(script);
            }

        } catch (error) {
            console.error("Failed to load content:", error);
            bodyContentContainer.innerHTML = `<p style="color: red;">Error loading content. Please try again.</p>`;
        }
    };

    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            const contentFile = item.dataset.contentFile; // Get content file path
            const scriptFile = item.dataset.scriptFile;   // Get script file path (can be undefined)

            if (contentFile) {
                loadContent(contentFile, scriptFile); // Call your loadContent function
            }

            // Hide the dropdown menu after an item is clicked
            dropdownMenuItems.style.display = 'none';
            menuButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            menuButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });

    // Optional: Load initial content when the page loads
    // You might want to load 'home.html' and 'home.js' by default
    // Find the 'Home' item and simulate a click or call loadContent directly
    const initialLoadItem = document.querySelector('[data-content-file="/pages/sys_init_general_inputs.html"]');
    if (initialLoadItem) {
        loadContent(initialLoadItem.dataset.contentFile, initialLoadItem.dataset.scriptFile);
        menuButton.childNodes[0].nodeValue = initialLoadItem.textContent + ' ';
    }
});