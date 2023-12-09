// document.addEventListener("DOMContentLoaded", function() {
//     var creal = -.8;
//     var cimag = .156;
//     var canvas = document.getElementById('juliaCanvas'); // Make sure this ID matches your canvas ID
//     var context = canvas.getContext('2d');
//     var frame = 0;
//
//     var pallette = []; // An array that stores RGB combinations
//
//     // ... (palette initialization code)
//
//     function julia() {
//         var magnificationFactor = canvas.width / 6; // Adjust for canvas size
//         var offsetX = canvas.width / 2; // Adjust to center the fractal on the canvas
//         var offsetY = canvas.height / 2; // Adjust to center the fractal on the canvas
//
//         for (var y = 0; y < canvas.height; y++) {
//             for (var x = 0; x < canvas.width; x++) {
//                 var cx = -2 + (x - offsetX) / magnificationFactor;
//                 var cy = -2 + (y - offsetY) / magnificationFactor;
//                 var i = 0;
//
//                 do {
//                     var xt = cx * cx - cy * cy + creal;
//                     cy = 2 * cx * cy + cimag;
//                     cx = xt;
//                     i++;
//                 } while ((cx * cx + cy * cy < 4) && i < 25);
//
//                 context.beginPath();
//                 context.rect(x, y, 1, 1); // Draw a 1x1 pixel
//                 context.fillStyle = pallette[i];
//                 context.fill();
//             }
//         }
//
//         frame++;
//         creal = -.8 + .6 * Math.sin(frame / (Math.PI * 20));
//         cimag = .156 + .4 * Math.cos(frame / (Math.PI * 40));
//
//         // Request next frame
//         requestAnimationFrame(julia);
//     }
//
//     for (x = 0; x < 50; x++) {
//         // Using a scale factor to create different shades of grey
//         // 256 / 25 ensures that we get 25 different shades from black to white
//         var greyScale = Math.floor(256 / 50 * x).toString(16);
//
//         // Ensure we always have at least two hex digits
//         if (greyScale.length === 1) greyScale = '0' + greyScale;
//
//         // Set the color to be a shade of grey
//         // Since R, G, and B are the same, it will be a grey color
//         pallette[x] = "#" + greyScale + greyScale + greyScale;
//     }
//
//
//
//     requestAnimationFrame(julia); // Start the animation
// });