import { stateControlPlant1, stateControlPlant2, blueFood } from '../src/power-plant.js';

describe( 'power-plant', () => {
  
  test('should increment soil by 5', () => {
    const newState = stateControlPlant1(blueFood);
    expect(newState.soil).toEqual(5);
  })

  test.only('should seperately increment each newState', () =>{
    const newState = stateControlPlant1(blueFood);
    const newState2 = stateControlPlant2(blueFood);
    expect (newState.soil).toEqual(newState2.soil);
  })
})
