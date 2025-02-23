import { checkIfAnimationWasDone } from './../../common/scripts/common.js';
import CarsService from './../../common/scripts/services/cars.service.js';

const brandsDropdown = document.querySelector('#car-brand-dropdown');
const carModelsDropdown = document.querySelector('#car-model-dropdown');
const carsGrid = document.querySelector('.cars-grid');

initializePage();

function initializePage() {
  checkIfAnimationWasDone();
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
  cars.forEach(populateCarsGrid);
}

function populateCarsGrid(car) {
  const card = document.createElement('article');

  card.classList.add('individual-cars-card-container');

  card.innerHTML = `
    <article class="card">
      <header>
        ${
          car.img
            ? `<img class="card-image"
                  src=${car.img}
                  alt=${car.title} />`
            : ''
        }
      </header>
      <div class="card-main-content">
        <h4>${car.title}</h4>
        <p>
          ${car.description}
        </p>
        <p class="price-individual-card">${car.price}</p>
      </div>
      <footer class="details-and-buy-button-container">
        <button aria-label="More details about Toyota Corolla LE" class="card-buttons">More details...</button>
        <button aria-label="Buy Toyota Corolla LE" class="card-buttons">Buy</button>
      </footer>
    </article>
  `;

  carsGrid.appendChild(card);
}
