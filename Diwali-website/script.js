function createFirework() {

    const firework = document.createElement("div");

    firework.className = "firework";

    firework.style.left = Math.random() * 100 + "vw";

    firework.style.top = Math.random() * 70 + "vh";

    document.body.appendChild(firework);
    setTimeout(function () {
        firework.remove();
    }, 1000);

}

setInterval(createFirework, 700);

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

    exploreBtn.disabled = true;

    const colors = [
        "gold",
        "orange",
        "green",
        "black",
        "yellow",
        "blue",
        "purple",
        "red",
        "pink",
        "cyan",
        "white"
    ];
    
    const rect = exploreBtn.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 80; i++) {

        const particle = document.createElement("span");

        particle.className = "burst-particle";

        particle.style.left = centerX + "px";
        particle.style.top = centerY + "px";

        particle.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        const angle = Math.random() * Math.PI * 2;

        const distance = Math.random() * 250 + 50;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        particle.style.setProperty("--dx", x + "px");
        particle.style.setProperty("--dy", y + "px");

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1500);
    }

    setTimeout(function () {
        window.location.href = "preparations.html";
    }, 1800);

});