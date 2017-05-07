const Elevator = require("./elevator");
const Passenger = require("./passenger");

 const elevator = new Elevator();

 const passengers = [new Passenger ("Jane", 3),
 new Passenger ("Andie", 2),
 new Passenger ("Alexandra", 1)];
 let name = Passenger.name;
 let floor = Passenger.floor;

function loadElevator() {
  elevator.loadPassenger(passengers.pop());
}
function unLoadElevator() {
  elevator.unLoadPassenger;
}

 elevator.on("up", function(event) {
   console.log(event.currentFloor);
   if (event.currentFloor < elevator.currentPassenger.floor) {
     console.log(elevator.currentPassenger.name + " is moving up.");
   }
   if (event.currentFloor === elevator.currentPassenger.floor) {
     console.log("We're at" + elevator.currentPassenger.name + "'s floor!");
     unLoadElevator();
     elevator.goDown();
   }
   else {
     elevator.goUp;
   }
 });

 elevator.on("down", function (event) {
   if (event.currentFloor !== 0) {
     elevator.goDown();
   }
   if (passengers.length > 0 && event.currentFloor === 0) {
     loadElevator();
     console.log(elevator.currentPassenger.name + "is now in the elevator");
   }
 });

elevator.loadPassenger(passengers.pop());

console.log(elevator.currentPassenger);
elevator.goUp();
