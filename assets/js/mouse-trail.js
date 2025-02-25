document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";

    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    document.addEventListener("mousemove", (event) => {
        for (let i = 0; i < 5; i++) {
            particles.push({
                x: event.clientX,
                y: event.clientY,
                size: Math.random() * 6 + 2,
                alpha: 1,
                velocityX: (Math.random() - 0.5) * 3,
                velocityY: (Math.random() - 0.5) * 3
            });
        }
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 0, 127, ${p.alpha})`;
            ctx.fill();

            p.x += p.velocityX;
            p.y += p.velocityY;
            p.alpha -= 0.02;
            if (p.alpha <= 0) particles.splice(i, 1);
        }

        requestAnimationFrame(draw);
    }

    draw();
});
