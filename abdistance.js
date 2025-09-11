let speed = 30; 
let time = 96; 
let distance = 0;
let maxSpeed = 120; 

for (let i = 0; i < time; i += 10) {
    distance += (speed * 10) / 60; 
    if (speed > maxSpeed) {
        speed = maxSpeed;
    }
    console.log("distance: "+distance);
}