const giftBtn = document.getElementById("giftBtn");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("overlay");

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "🩷";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Create a heart every 300ms
setInterval(createHeart, 300);

// Gift Button
giftBtn.addEventListener("click", () => {

    // Play music
    music.play().catch(() => {});

    // Show overlay
    overlay.classList.add("show");

    // Hide overlay after 4 seconds
    setTimeout(() => {
        overlay.classList.remove("show");
    }, 4000);

});