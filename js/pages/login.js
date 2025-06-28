

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('networkCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;

    const nodes = [];
    const numNodes = 150; // Number of nodes in the network
    const maxDistance = 80; // Max distance for lines to connect
    const nodeRadius = 3;
    const nodeSpeed = 0.4; // Speed of node movement

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Node {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * nodeSpeed;
            this.vy = (Math.random() - 0.5) * nodeSpeed;
            this.radius = nodeRadius;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off walls
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 255, 255, 0.8)'; // Cyan dots
            ctx.fill();
        }
    }

    function init() {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        for (let i = 0; i < numNodes; i++) {
            nodes.push(new Node());
        }
        animate();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height); // Clear canvas

        for (let i = 0; i < nodes.length; i++) {
            nodes[i].update();
            nodes[i].draw();

            // Draw lines between nearby nodes
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(100, 100, 100, ${1 - (distance / maxDistance)})`; // Fading grey lines
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    init();


    // DropDownMenus
    const financialYearMenuButton = document.getElementById('financial-year-menu-button');
    const financialYearMenuItems = document.getElementById('financial-year-menu');
    const financialYearMenuItem = document.querySelectorAll('.financial-year-item');

    financialYearMenuButton.addEventListener('click', () => {
        const isExpanded = financialYearMenuButton.getAttribute('aria-expanded') === 'true';
        financialYearMenuButton.setAttribute('aria-expanded', !isExpanded);

        if (financialYearMenuItems.style.display === 'none') {
            financialYearMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            financialYearMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

    financialYearMenuItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            // Hide the dropdown menu after an item is clicked
            financialYearMenuItems.style.display = 'none';
            financialYearMenuButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            financialYearMenuButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });


    const sysUserMenuButton = document.getElementById('sys-user-menu-button');
    const sysUserMenuItems = document.getElementById('sys-user-menu');
    const sysUserMenuItem = document.querySelectorAll('.sys-user-item');

    sysUserMenuButton.addEventListener('click', () => {
        const isExpanded = sysUserMenuButton.getAttribute('aria-expanded') === 'true';
        sysUserMenuButton.setAttribute('aria-expanded', !isExpanded);

        if (sysUserMenuItems.style.display === 'none') {
            sysUserMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            sysUserMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

    sysUserMenuItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            // Hide the dropdown menu after an item is clicked
            sysUserMenuItems.style.display = 'none';
            sysUserMenuButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            sysUserMenuButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });


    const branchMenuButton = document.getElementById('branch-menu-button');
    const branchMenuItems = document.getElementById('branch-menu');
    const branchMenuItem = document.querySelectorAll('.branch-item');

    branchMenuButton.addEventListener('click', () => {
        const isExpanded = branchMenuButton.getAttribute('aria-expanded') === 'true';
        branchMenuButton.setAttribute('aria-expanded', !isExpanded);

        if (branchMenuItems.style.display === 'none') {
            branchMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            branchMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

    branchMenuItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            // Hide the dropdown menu after an item is clicked
            branchMenuItems.style.display = 'none';
            branchMenuButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            branchMenuButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });


    const languageMenuButton = document.getElementById('language-menu-button');
    const languageMenuItems = document.getElementById('language-menu');
    const languageMenuItem = document.querySelectorAll('.language-item');

    languageMenuButton.addEventListener('click', () => {
        const isExpanded = languageMenuButton.getAttribute('aria-expanded') === 'true';
        languageMenuButton.setAttribute('aria-expanded', !isExpanded);

        if (languageMenuItems.style.display === 'none') {
            languageMenuItems.style.display = 'block'; // Show the dropdown
        } else {
            languageMenuItems.style.display = 'none'; // Hide the dropdown
        }
    });

    languageMenuItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (full page reload)

            // Hide the dropdown menu after an item is clicked
            languageMenuItems.style.display = 'none';
            languageMenuButton.setAttribute('aria-expanded', 'false');

            // Optionally, update the button text to show selected item
            languageMenuButton.childNodes[0].nodeValue = item.textContent + ' '; // Update button text
        });
    });


    document.addEventListener('click', (event) => {
        if ((!languageMenuButton.contains(event.target) && !languageMenuItems.contains(event.target))) {
            languageMenuItems.style.display = 'none';
            languageMenuButton.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('click', (event) => {
        if ((!sysUserMenuButton.contains(event.target) && !sysUserMenuItems.contains(event.target))) {
            sysUserMenuItems.style.display = 'none';
            sysUserMenuButton.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('click', (event) => {
        if ((!branchMenuButton.contains(event.target) && !branchMenuItems.contains(event.target))) {
            branchMenuItems.style.display = 'none';
            branchMenuButton.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('click', (event) => {
        if ((!financialYearMenuButton.contains(event.target) && !financialYearMenuItems.contains(event.target))) {
            financialYearMenuItems.style.display = 'none';
            financialYearMenuButton.setAttribute('aria-expanded', 'false');
        }
    });
});
