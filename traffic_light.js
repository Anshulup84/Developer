let trafficLight = "orange";

if (trafficLight == "red") {
    console.log("Vehicles must stop.");
} else if (trafficLight == "orange") {
    console.log("Vehicles must wait. The signal is changing red to green");
} else if (trafficLight == "green") {
    console.log("Vehicles may proceed with caution");
} else {
    console.log("Invalid traffic Light");
}