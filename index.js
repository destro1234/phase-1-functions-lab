// Code your solution in this file!
let start = 42

function distanceFromHqInBlocks(destination) {
   return Math.abs(destination - start)
}

function distanceFromHqInFeet(destination) {
    return (distanceFromHqInBlocks(destination) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264); 
}

function calculatesFarePrice(start, destination) {
    if (400 > distanceTravelledInFeet(start, destination)) {
        return 0;
    }
    
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far"
    }

    if (distanceTravelledInFeet(start, destination) > 2000) {
        return 25;
        
    }

   

    else if (400 < distanceTravelledInFeet(start, destination) < 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * .02);
    }

   
  
}