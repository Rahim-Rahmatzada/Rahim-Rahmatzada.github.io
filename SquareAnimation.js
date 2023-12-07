// document.addEventListener("DOMContentLoaded", function () {
//     const introSection = document.getElementById("intro");
//
//     for (let i = 0; i < 10; i++) {
//         const square = document.createElement("div");
//         square.className = "square";
//
//         square.style.left = Math.random() * introSection.clientWidth + "px";
//         square.style.top = Math.random() * introSection.clientHeight + "px";
//
//         introSection.appendChild(square);
//
//         setInterval(() => {
//             // Update position at intervals
//             square.style.left = Math.random() * introSection.clientWidth + "px";
//             square.style.top = Math.random() * introSection.clientHeight + "px";
//         }, 3000); // Interval to sync with fadeInOut animation
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const introSection = document.getElementById("intro");
    const imageElement = introSection.querySelector("img");

    function getRandomPosition(elementWidth, elementHeight) {
        let xPos = Math.random() * introSection.clientWidth;
        let yPos = Math.random() * introSection.clientHeight;

        // Get image dimensions and position
        const imageRect = imageElement.getBoundingClientRect();

        // Check if the random position is over the image and re-roll if it is
        while (
            xPos > imageRect.left &&
            xPos < imageRect.right &&
            yPos > imageRect.top &&
            yPos < imageRect.bottom
            ) {
            xPos = Math.random() * introSection.clientWidth;
            yPos = Math.random() * introSection.clientHeight;
        }

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
