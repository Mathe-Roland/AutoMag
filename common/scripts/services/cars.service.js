import { listOfCars } from './../../../mock-data/cars-mock.js';

export default class CarsService {
  static #getCarBrand(selectedBrand) {
    return listOfCars.find((carBrand) => carBrand.name === selectedBrand);
  }

  static initializeCarBrandsDropdown(brandsDropdown) {
    listOfCars.forEach((carBrand) => {
      const item = document.createElement('option');
      item.textContent = carBrand.name;
      item.value = carBrand.name;
      brandsDropdown.appendChild(item);
    });
  }

  static populateModelDropdown(modelDropdown, selectedBrand) {
    modelDropdown.innerHTML = '<option>Select model</option>';
    const selectedCarBrand = CarsService.#getCarBrand(selectedBrand);
    const models =
      selectedCarBrand && selectedCarBrand.models.map((model) => model.title);

    if (models) {
      models.forEach((model) => {
        const option = document.createElement('option');
        option.textContent = model;
        option.value = model;
        modelDropdown.appendChild(option);
      });
    }
  }

  static getCarsByBrandAndModel(selectedBrand, selectedModel) {
    const selectedCarBrand = CarsService.#getCarBrand(selectedBrand);
    const selectedModels =
      selectedCarBrand &&
      selectedCarBrand.models.filter((model) => model.title === selectedModel);

    return selectedModels;
  }
}
