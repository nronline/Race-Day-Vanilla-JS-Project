//Initialize variables
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
const runnerAge = 18;

//if runner is over 18 and registered early do this
if (runnerAge > 18 && registeredEarly){
  console.log(`Your race number is ${raceNumber} and you will race at 9:30am`);
}

// if runner is over 18 and didn't register early do this
else if(runnerAge > 18 && !registeredEarly){
  console.log(`Your race number is ${raceNumber} and you will race at 11am`);
}

// if runner is under 18 do this
else if(runnerAge < 18){
  console.log(`Your race number is ${raceNumber} and you will race at 12:30pm`);
}

// otherwise runner is 18 so do this
else{
 console.log('See the refrigeration desk');
}




