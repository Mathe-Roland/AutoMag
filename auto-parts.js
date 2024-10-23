const brandSelector=document.querySelector(".select-brand");
const modelSelector=document.querySelector(".select-model");
const fuelTypeSelector=document.querySelector(".select-fuel-type");
const engineDisplacementSeceltor=document.querySelector(".select-engine-displacement");
const horsepowerSelector=document.querySelector(".select-horsepower");
const displayAfterSpecifications=document.querySelector(".hidden");


const showSpecifications=()=>{

    if(fuelTypeSelector.value!=="Select fuel type" && engineDisplacementSeceltor.value!=="Select engine displacement"
         && horsepowerSelector.value!=="Select horsepower" 
        && brandSelector.value!=="Select brand"){
    
            displayAfterSpecifications.classList.remove("hidden");
    }else{

        displayAfterSpecifications.classList.add("hidden");
    }


}


const toyota=["Prius","Corolla","Sienna","Avalon"];
const dacia=["Duster","Logan","Sandero","Dokker"];
const citroen=["C3","C4","C1","Berlingo"];
const volkswagen=["Golf","Polo","ID.4","Atlas"];

const selectmodelSelector = (e) => {
    const item = e.target.value;  

    modelSelector.innerHTML="";

    if (item === "Toyota") {

        toyota.forEach((e)=>{

            const option=document.createElement("option");
            option.textContent=e;
            option.value=e.toLowerCase();
            modelSelector.appendChild(option);
        })
        
        
    } else if (item === "Dacia") {
        dacia.forEach((e)=>{

            const option=document.createElement("option");
            option.textContent=e;
            option.value=e.toLowerCase();
            modelSelector.appendChild(option);
        })
    } else if (item === "Citroen") {
        citroen.forEach((e)=>{

            const option=document.createElement("option");
            option.textContent=e;
            option.value=e.toLowerCase();
            modelSelector.appendChild(option);
        })
        
    } else if (item === "Volkswagen") {
        volkswagen.forEach((e)=>{

            const option=document.createElement("option");
            option.textContent=e;
            option.value=e.toLowerCase();
            modelSelector.appendChild(option);
        })
        
    }
};

brandSelector.addEventListener("change", selectmodelSelector);

brandSelector.addEventListener("change", showSpecifications);
modelSelector.addEventListener("change",showSpecifications)
fuelTypeSelector.addEventListener("change",showSpecifications)
engineDisplacementSeceltor.addEventListener("change",showSpecifications)
horsepowerSelector.addEventListener("change",showSpecifications)
