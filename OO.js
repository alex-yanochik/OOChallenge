class Vehicle{
    constructor(make, model, year) {
        this.a = make;
        this.b = model;
        this.c = year;
    }

        honk(){
            console.log("Beep!")
        }
        toString(){
            console.log(`Make: ${a}, Model:${b}, Year:${c}`)
        }
}


const mazdaSix = new Vehicle('Mazda', '6', '2011')


class Car extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = '4';
      }
}

class MotorCycle extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = '2';
    }

    revEngine(){
        console.log("VROOM!!!")
    }
}


class Garage{
    constructor(capacity){
        this.vehicles = []
        this.capacity = capacity;
    }

    add(vehicle) {
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, We're full"
        }
        if(!(vehicle instanceof Car)){
            return `Only ${this.capacity} vehicles in here`
        }
        this.vehicles.push(vehicle);
    }
}

let garage = new Garage(2);
console.log(garage.vehicles)
garage.add(new Car("Hyundai", "Elantra", 2015));
console.log(garage.add('Taco'))
console.log(garage);