'use strict';
const defaultTypeOfTransport = "This is some transport",
    defaultWeight = "Mass of transport not determined";


class Transport {

    constructor(type, weight) {
        this.type = type || defaultTypeOfTransport;
        this.weight = weight || defaultWeight;
    }
}

let car = new Transport("Car", "3T");
let scooter = new Transport("","3T");
