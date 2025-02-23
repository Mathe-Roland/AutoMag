import { checkIfAnimationWasDone } from './../../common/scripts/common.js';
import { engineOptions } from '../../mock-data/engine-mock.js';
import CarsService from '../../common/scripts/services/cars.service.js';

const container = document.querySelector('.cars-selectors-container');
const brandSelector = document.querySelector('.select-brand');
const modelSelector = document.querySelector('.select-model');
const fuelTypeSelector = document.querySelector('.select-fuel-type');
const engineDisplacementSelector = document.querySelector(
  '.select-engine-displacement'
);
const horsepowerSelector = document.querySelector('.select-horsepower');
const autoPartsGrid = document.querySelector('.auto-parts-grid');

initializePage();

function initializePage() {
  checkIfAnimationWasDone();
  CarsService.initializeCarBrandsDropdown(brandSelector);
  populateEngine(engineOptions.fuelTypeOptions, fuelTypeSelector);
  populateEngine(engineOptions.horsepowerOptions, horsepowerSelector);
  populateEngine(
    engineOptions.engineDisplacementOptions,
    engineDisplacementSelector
  );

  container.addEventListener('change', onSelectChange);
}

/**
 * PAGE INITIALIZATION FUNCTIONS
 */

function populateEngine(option, appendedElement) {
  option.forEach((e) => {
    const item = document.createElement('option');
    item.textContent = e;
    item.value = e;
    appendedElement.appendChild(item);
  });
}

/**
 * DROPDOWNS EVENT HANDLERS LOGIC
 */

function onSelectChange(event) {
  if (event.target.tagName === 'SELECT') {
    if (event.target.id === 'car-brand-dropdown') {
      CarsService.populateModelDropdown(modelSelector, event.target.value);
    } else {
      displayAutoPartsGrid();
    }
  }
}

function displayAutoPartsGrid() {
  if (
    fuelTypeSelector.value !== 'Select fuel type' &&
    engineDisplacementSelector.value !== 'Select engine displacement' &&
    horsepowerSelector.value !== 'Select horsepower' &&
    brandSelector.value !== 'Select brand'
  ) {
    autoPartsGrid.classList.remove('hidden');
  } else {
    autoPartsGrid.classList.add('hidden');
  }
}
