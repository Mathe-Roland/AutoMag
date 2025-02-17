import { carModelDropDown } from "./cars-mock.js";
import { engineOptions } from "./engine-mock.js";

const brandSelector=document.querySelector(".select-brand");
const modelSelector=document.querySelector(".select-model");
const fuelTypeSelector=document.querySelector(".select-fuel-type");
const engineDisplacementSelector=document.querySelector(".select-engine-displacement");
const horsepowerSelector=document.querySelector(".select-horsepower");
const displayAfterSpecifications=document.querySelector(".hidden");



const showSpecifications=()=>{

    if(fuelTypeSelector.value!=="Select fuel type" && engineDisplacementSelector.value!=="Select engine displacement"
         && horsepowerSelector.value!=="Select horsepower" 
        && brandSelector.value!=="Select brand"){
    
            displayAfterSpecifications.classList.remove("hidden");
    }else{

        displayAfterSpecifications.classList.add("hidden");
    }


}


const initializeCars=()=>{

    brandSelector.innerHTML="";

  for(let key in carModelDropDown){

      const item=document.createElement("option");
      item.textContent=key;
      item.value=key;
      brandSelector.appendChild(item);
  };

};



const initializeCarModels=()=>{

    modelSelector.innerHTML="";
  carModelDropDown[brandSelector.value].forEach(e=>{
    
    const item=document.createElement("option");
    item.textContent=e.toLowerCase();
    item.value=e.toLowerCase();
    modelSelector.appendChild(item);
  })
};


const populateEngine=(option,appendedElement)=>{

        appendedElement.innerHTML="";
        option.forEach(e=>{
        
        const item=document.createElement("option")
        item.textContent=e;
        item.value=e;
        appendedElement.appendChild(item);
      })
    };
    
initializeCars();
initializeCarModels();
populateEngine(engineOptions.fuelTypeOptions,fuelTypeSelector);
populateEngine(engineOptions.horsepowerOptions,horsepowerSelector);
populateEngine(engineOptions.engineDisplacementOptions,engineDisplacementSelector);


const selectmodelSelector = (e) => {
    const item = e.target.value;  

    console.log(item);

    modelSelector.innerHTML="";

        carModelDropDown[item].forEach((e)=>{

            const option=document.createElement("option");
            option.textContent=e;
            option.value=e.toLowerCase();
            modelSelector.appendChild(option);
        })
        
};

brandSelector.addEventListener("change", selectmodelSelector);

brandSelector.addEventListener("change", showSpecifications);
modelSelector.addEventListener("change",showSpecifications)
fuelTypeSelector.addEventListener("change",showSpecifications)
engineDisplacementSelector.addEventListener("change",showSpecifications)
horsepowerSelector.addEventListener("change",showSpecifications)
