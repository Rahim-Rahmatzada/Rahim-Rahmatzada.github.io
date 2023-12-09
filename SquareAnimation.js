document.addEventListener("DOMContentLoaded", function () {
    const introSection = document.getElementById("intro");
    const imageElement = introSection.querySelector("img");

    function getRandomPosition(elementWidth, elementHeight) {
        let xPos = Math.random() * introSection.clientWidth;
        let yPos = Math.random() * introSection.clientHeight;

        return { x: xPos, y: yPos };
    }

    for (let i = 0; i < 10; i++) {
        // Use setTimeout to delay the execution of the function for each square
        setTimeout(() => {
            const square = document.createElement("div");
            square.className = "square";

            const { x, y } = getRandomPosition(15, 15); // Assume squares are 15x15px
            square.style.left = x + "px";
            square.style.top = y + "px";

            introSection.appendChild(square);

            setInterval(() => {
                const { x, y } = getRandomPosition(15, 15);
                square.style.left = x + "px";
                square.style.top = y + "px";
            }, 5000); // 3000ms to sync with the fadeInOut animation duration
        }, i * 500); // Introduce a delay of 500ms times the index (i)
    }
});
