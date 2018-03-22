document.onmousedown = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let place = document.querySelector("body");
    let div = document.createElement("div");
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    let newElement = place.appendChild(div);
    newElement.className = "dot";
};