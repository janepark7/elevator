const Elevator = require("./elevator");
const Passenger = require("./passenger");

// const elevator = new Elevator();
// const passenger = new Passenger ("Jane", 7);

// elevator.goUp();
//
// elevator.on("up", function(event) {
// 	console.log(event);
// 	elevator.goDown();
// });
//
// elevator.on("down", function(event) {
// 	console.log(event);
// 	elevator.goUp();
// });
 const passenger = [new Passenger ("Jane", 3), new Passenger ("Jonathan", 2), new Passenger ("Dan", 1)];
console.log(passenger);
