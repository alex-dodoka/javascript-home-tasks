'use strict';
const
    defaultTypeOfTransport = "This is some transport",
    defaultWeight = "Mass of transport not determined",
    arrOfModelNames = ["Reno", "Volkswagen", "Mersedes", "Mazda", "Zaporozhets"],
    arrOfPrice = [2000, 500000, 11500, 66985, 223658,];

let getRandomValue = function (arrOfValue) {
    let index = Math.floor(Math.random() * arrOfValue.length);
    let value = arrOfValue[index];
    return value;
};

class Transport {
    constructor(model, cost, fuelSpent, distanceTraveled) {
        this.model = model;
        this.cost = cost;
        this.fuelSpent = fuelSpent;
        this.distanceTraveled = distanceTraveled;
    }

    start() {
        console.log(`${this.model} was started. Wroooommmmm!`);
    }

    getFuelConsumption(fuelSpent, distanceTraveled) {

        let consummption = (fuelSpent * 100) / distanceTraveled;
        return `Расход топлива составляет: ${consummption} л на 100 км.`;
    }
}

class PassengerCar extends Transport {
}

class Train extends Transport {
}

class MegaTrain extends Train {
    doubleConsumption(fuelSpent, distanceTraveled) {
        return super.getFuelConsumption(fuelSpent * 2, distanceTraveled);
    }
}

let car = new PassengerCar(getRandomValue(arrOfModelNames), getRandomValue(arrOfPrice), 1000, 3120);
console.log(car.getFuelConsumption(825, 3300));

let train = new MegaTrain(getRandomValue(arrOfModelNames), getRandomValue(arrOfPrice), 1000, 3120);
console.log(train.doubleConsumption(825, 3300));