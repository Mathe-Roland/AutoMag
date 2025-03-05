import { checkIfHeaderAnimatiosnWereDone } from './../../common/scripts/common.js';
import CarsService from './../../common/scripts/services/cars.service.js';

const brandsDropdown = document.querySelector('#car-brand-dropdown');
const carModelsDropdown = document.querySelector('#car-model-dropdown');
const carsGrid = document.querySelector('.cars-grid');

initializePage();

function initializePage() {
  checkIfHeaderAnimatiosnWereDone();
  CarsService.initializeCarBrandsDropdown(brandsDropdown);

  brandsDropdown.addEventListener('change', onSelectBrand);
  carModelsDropdown.addEventListener('change', onSelectModel);
}

function onSelectBrand(event) {
  CarsService.populateModelDropdown(carModelsDropdown, event.target.value);
}

function onSelectModel(event) {
  const cars = CarsService.getCarsByBrandAndModel(
    brandsDropdown.value,
    event.target.value
  );
  console.log();
  cars.forEach((car)=>
    CarsService.populateCarsGrid(car,carsGrid));
}
