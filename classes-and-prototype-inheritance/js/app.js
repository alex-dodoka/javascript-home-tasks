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

function getRandomValue(arrOfValue) {
    let index = Math.floor(Math.random() * arrOfValue.length);
    let value = arrOfValue[index];
    return value;
}

class PassengerCar extends Transport {

}

let car = new PassengerCar(getRandomValue(arrOfModelNames), getRandomValue(arrOfPrice), 100);