document.onmousedown = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let place = document.querySelector("body");
    let div = document.createElement("div");
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    let newElement = place.appendChild(div);
    newElement.className = "dot";  // create dot on page.
};

btn.oncontextmenu = function (e) {
    e.preventDefault();
    createContextWindow(e.clientX, e.clientY);

};

function createContextWindow(coordX, coordY) {
    let newElement = document.querySelector("div");
    newElement.style.display = "block";
    newElement.style.left = `${coordX}px`;
    newElement.style.top = `${coordY}px`;
    newElement.className = "context";
}

document.onclick = function (e) {
    e.preventDefault();
    let target = e.srcElement.localName;
    if (target === "html") {
        let menu = document.getElementsByClassName("context");
        menu[0].style.display = "none";
    }
    if (target === "li") {
        console.log(e.target.textContent);
    }
};