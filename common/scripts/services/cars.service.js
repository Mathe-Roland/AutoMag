import { listOfCars } from './../../../mock-data/cars-mock.js';

export default class CarsService {
  static #getCarBrand(selectedBrand) {
    return listOfCars.find((carBrand) => carBrand.name === selectedBrand);
  }

  static initializeCarBrandsDropdown(brandsDropdown) {

    console.log(listOfCars);
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

  static populateCarsGrid(car,carsGrid) {
    const card = document.createElement('article');
    
    card.classList.add('individual-cars-card-container');
  
    card.innerHTML = `
      <article class="card">
        <header>
          ${
            car.models[0].image
              ? `<img class="card-image"
                    src=${car.models[0].image}
                    alt=${car.models[0].title} />`
              : ''
          }
        </header>
        <div class="card-main-content">
          <h4>${car.models[0].title}</h4>
          <p>
            ${car.models[0].description}
          </p>
          <p class="price-individual-card">${car.models[0].price}</p>
        </div>
        <footer class="flex j-c-c m-gap">
          <button class="s-xs-padding" aria-label="More details about Toyota Corolla LE" class=".buttons">More details...</button>
          <button class="s-xs-padding" aria-label="Buy Toyota Corolla LE" class=".buttons">Buy</button>
        </footer>
      </article>
    `;
  
    carsGrid.appendChild(card);
  }

}
