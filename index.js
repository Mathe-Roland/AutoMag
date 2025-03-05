import { checkIfHeaderAnimatiosnWereDone } from './common/scripts/common.js';
import CarsService from './common/scripts/services/cars.service.js';
import { listOfCars } from './mock-data/cars-mock.js';
const sectionForCars=document.querySelector(".cards-grid");

checkIfHeaderAnimatiosnWereDone();

listOfCars.forEach((car)=>{
    console.log(car);
    CarsService.populateCarsGrid(car,sectionForCars)});
