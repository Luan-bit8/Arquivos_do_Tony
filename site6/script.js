var images = [
    "images/header.png",
    "images/header.png",
    "images/header.png"
];

function randomator() {
    document.getElementsByClassName("header")[0].style.backgroundImage =
        "url(" + images[Math.floor(Math.random() * images.length)] + ")";
}

randomator();
