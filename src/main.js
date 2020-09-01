import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { stateControlPlant1, stateControlPlant2, blueFood } from './power-plant.js';
import $ from "jquery";

$(document).ready(function() {
  $('#feed1').click(function() {
    const newState = stateControlPlant1(blueFood);
    $('#soil-value1').text(`Soil: ${newState.soil}`);
  });

  $('#show-state').click(function() {
    const currentState = stateControlPlant1();
    $('#soil-value1').text(`Soil: ${currentState.soil}`);
  });

  $('#feed2').click(function() {
    const newState2 = stateControlPlant2(blueFood);
    $('#soil-value2').text(`Soil: ${newState2.soil}`);
  });

  $(`#show-state2`).click(function() {
    const currentState2 = stateControlPlant2();
    $('#soil-value2').text(`Soil: ${currentState2.soil}`);
  });
});
