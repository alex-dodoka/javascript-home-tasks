document.onmousedown = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let place = document.querySelector("body");
    let div = document.createElement("div");
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    let newElement = place.appendChild(div);
    // newElement.className = "dot";  // create dot on page.
};

btn.oncontextmenu = function (e) {
    e.preventDefault();
    createContextWindow(e.clientX, e.clientY);
    addNewPointsMenu();
};

function createContextWindow(coordX, coordY) {
    let placeOfClick = document.querySelector("body");
    let newElement = document.createElement("div");
    newElement.style.left = `${coordX}px`;
    newElement.style.top = `${coordY}px`;
    newElement.className = "context";
    placeOfClick.appendChild(newElement);
}

function addNewPointsMenu() {
    let menu = document.getElementsByClassName("context");
    let pointOfMenu = document.createElement("p");
    pointOfMenu.innerText = "Point 1";
    menu[0].appendChild(pointOfMenu);
}


