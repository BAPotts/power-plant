

// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) =>{
    return (state) => ({...state,
      [prop]: (state[prop] || 0) + value})
  }
}

// We create four functions using our function factory.

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);
export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);


// UI Logic
// $(document).ready(function() {
//   $(form).submit(function(event) {
//     event.preventDefault();

//     $('#feed').click(function() {
//       const newState = stateControl(blueFood);
//       $('#soil-value').text(`Soil: ${newState.soil}`);
//     });

//     $('#show-state').click(function() {
//       const currentState = stateControl();
//       $('#soil-value').text(`Soil: ${currentState.soil}`);
//     });
//   });
// });



// let plant = {soil: 0, light: 0, water:0 }
//console.log(changeState(plant, "soil"))
// console.log(feed(5)(plant))
// console.log(hydrate(3)(plant))
// const greenFood = changeState("soil")(10);
// const fedPlant = stateControl(blueFood);
// const fedPlantAgain = stateControl(greenFood);


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