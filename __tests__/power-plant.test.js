import { stateControl, blueFood } from '../src/power-plant.js';

describe( 'power-plant', () => {
  
  test('should increment soil by 5', () => {
    const newState = stateControl(blueFood);
    expect(newState.soil).toEqual(5);
  })
})
