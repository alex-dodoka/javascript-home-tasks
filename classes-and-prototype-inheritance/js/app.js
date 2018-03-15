'use strict';
const defaultTypeOfTransport = "This is some transport",
    defaultWeight = "Mass of transport not determined",
    arrOfModelNames = ["Reno", "Volkswagen", "Mersedes", "Mazda", "Zaporozhets"],
    arrOfPrice = [2000, 500000, 11500, 66985, 223658,];

class Transport {

    constructor(model, cost, fuelConsumption) {
        this.model = model;
        this.cost = cost;
        this.fuelConsumption = fuelConsumption;
    }

}


function getRandomName(arrOfNames) {
    let indexName = Math.floor(Math.random() * arrOfNames.length);
    return arrOfNames[indexName];
}

function getRandomPrice(arrOfPrice) {
    let indexPrice = Math.floor(Math.random() * arrOfPrice.length);
    return arrOfPrice[indexPrice];
}

let car = new Transport(getRandomName(arrOfModelNames), getRandomPrice(arrOfPrice), 100);
let car2 = new Transport(getRandomName(arrOfModelNames), getRandomPrice(arrOfPrice), 100);
let car3 = new Transport(getRandomName(arrOfModelNames), getRandomPrice(arrOfPrice), 100);