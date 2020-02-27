class Ship {

    constructor(name, points, pointsTaken) {
        this.name = name;
        this.points = points;
        this.isAlive = true;
        this.pointsTaken = pointsTaken
    }

    decrement() {
        this.points = this.points - this.pointsTaken;
    }

    displayNewPoints() {
        this.decrement();
        return this.points;
    }
}

const motherShip = new Ship("Mother Ship - Badass", 100, 9);
const defenseShipOne = new Ship("Defense Ship 1", 80, 10);
const defenseShipTwo = new Ship("Defense Ship 1", 80, 10);
const defenseShipThree = new Ship("Defense Ship 1", 80, 10);
const defenseShipFour = new Ship("Defense Ship 1", 80, 10);
const defenseShipFive = new Ship("Defense Ship 1", 80, 10);
const ships = [motherShip, defenseShipOne, defenseShipTwo, defenseShipThree, defenseShipFour, defenseShipFive];

let outputMotherShip = document.getElementById("output-mother-ship");

let outputDefenseShipOne = document.getElementById("output-mother-ship-one");
let outputDefenseShipTwo = document.getElementById("output-defense-ship-two");
let outputDefenseShipThree = document.getElementById("output-defense-ship-three");
let outputDefenseShipFour = document.getElementById("output-defense-ship-four");
let outputDefenseShipFive = document.getElementById("output-defense-ship-five");

const display = () => {
    // console.log(ships[0].displayNewPoints());
    // console.log(ships[1].displayNewPoints());
    // console.log(ships[2].displayNewPoints());
    // console.log(ships[3].displayNewPoints());
    // console.log(ships[4].displayNewPoints());
    // console.log(ships[5].displayNewPoints());
    outputMotherShip.innerHTML = ships[0].displayNewPoints();
    // output.innerHTML = ships[0].displayNewPoints();
    // output.innerHTML = ships[0].displayNewPoints();
    // output.innerHTML = ships[0].displayNewPoints();
    // output.innerHTML = ships[0].displayNewPoints();
}

document.getElementById("attack").addEventListener("click", display);