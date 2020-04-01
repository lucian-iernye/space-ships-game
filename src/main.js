class Ship {

    constructor(name, points, pointsTaken) {
        this.name = name;
        this.points = points;
        this.isAlive = true;
        this.pointsTaken = pointsTaken;
    }

    decrement() {
        this.points = this.points - this.pointsTaken;
    }

    displayNewPoints() {
        this.decrement();
        document.getElementById(this.name).innerHTML = `${this.name} : ${this.points}`;
    }
}

const motherShip = new Ship("MotherShip", 100, 9);

const defenseShipOne = new Ship("Defence-Ship-One", 80, 10);
const defenseShipTwo = new Ship("Defence-Ship-Two", 80, 10);
const defenseShipThree = new Ship("Defence-Ship-Three", 80, 10);
const defenseShipFour = new Ship("Defence-Ship-Four", 80, 10);
const defenseShipFive = new Ship("Defence-Ship-Five", 80, 10);

const attackShipOne = new Ship("Attack-Ship-One", 45, 12);
const attackShipTwo = new Ship("Attack-Ship-Two", 45, 12);
const attackShipThree = new Ship("Attack-Ship-Three", 45, 12);
const attackShipFour = new Ship("Attack-Ship-Four", 45, 12);
const attackShipFive = new Ship("Attack-Ship-Five", 45, 12);
const attackShipSix = new Ship("Attack-Ship-Six", 45, 12);
const attackShipSeven = new Ship("Attack-Ship-Seven", 45, 12);
const attackShipEight = new Ship("Attack-Ship-Eight", 45, 12);

const ships = [motherShip, defenseShipOne, defenseShipTwo, defenseShipThree, defenseShipFour, defenseShipFive, attackShipOne, attackShipTwo, attackShipThree, attackShipFour, attackShipFive, attackShipSix, attackShipSeven, attackShipOne];

ships.forEach(ship => ship.displayNewPoints());

const displayDamage = () => {
    const randomPosition = Math.floor(Math.random() * ships.length);
    ships[randomPosition].displayNewPoints();
    if(ships[randomPosition].points <= 0) {
        document.getElementById(`${ships[randomPosition].name}`).innerHTML = "";
        ships.splice(randomPosition, 1);
    }
}

document.getElementById("attack").addEventListener("click", displayDamage);