// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

const changeState = (prop) => {
  return (value) =>{
    return (state) => ({...state, [prop]: (state[prop] || 0) + value})
  }
}

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

let plant = {soil: 0, light: 0, water:0 }
//console.log(changeState(plant, "soil"))

console.log(feed(5)(plant))
console.log(hydrate(3)(plant))

const blueFood = changeState("soil")(5);

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

const fedPlant = stateControl(blueFood);
console.log(fedPlant);