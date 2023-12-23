document.addEventListener("DOMContentLoaded", function () {
    // Get references to the elements
    const christmasTree = document.getElementById("christmas-tree");
    const santaClaus = document.getElementById("santa-claus");
    const merryChristmasLink = document.getElementById("merry-christmas-link");

    // Hide the Christmas tree and Santa Claus initially
    christmasTree.style.opacity = 0;
    santaClaus.style.opacity = 0;

    // Add event listener to toggle the visibility on link click
    merryChristmasLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior (e.g., navigating to another page)

        // Toggle the visibility of Christmas tree and Santa Claus
        if (christmasTree.style.opacity === "0") {
            christmasTree.style.opacity = 1;
            santaClaus.style.opacity = 1;
        } else {
            christmasTree.style.opacity = 0;
            santaClaus.style.opacity = 0;
        }
    });
});
