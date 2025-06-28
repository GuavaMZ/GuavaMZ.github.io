

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('networkCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;

    const nodes = [];
    const numNodes = 125; // Number of nodes in the network
    const maxDistance = 250; // Max distance for lines to connect
    const nodeRadius = 2;
    const nodeSpeed = 0.5; // Speed of node movement

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
});
