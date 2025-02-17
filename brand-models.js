import { listOfCars,carModelDropDown } from "./cars-mock.js";
const brands = document.querySelector("#car-brand-dropdown");
const carModels = document.querySelector("#car-model-dropdown"); 

const cardsSelected = document.querySelector(".cards-grid");



const selectCarModels = () => {
  carModels.innerHTML = "<option>Select car models</option>";

  const selectedBrand = brands.value.toLowerCase();
  if (carModelDropDown[selectedBrand]) {
    carModelDropDown[selectedBrand].forEach((model) => {
      const option = document.createElement("option");
      option.textContent = model;
      option.value = model.toLowerCase();
      carModels.appendChild(option);
    });
  }
};


brands.addEventListener("change", selectCarModels);

const cards=(individualCard)=>{


  const card=document.createElement("article");

  card.classList.add("individual-cars-card-container")

  
  card.innerHTML = `
  <article class="card">
    <header>
      <img class="card-image"
        src=${individualCard[0].img||""}
        alt=${individualCard[0].title} />
    </header>
    <div class="card-main-content">
      <h4>${individualCard[0].title}</h4>
      <p>
       ${individualCard[0].description}
      </p>
      <p class="price-individual-card">${individualCard[0].price}</p>
    </div>
    <footer class="details-and-buy-button-container">
      <button aria-label="More details about Toyota Corolla LE" class="card-buttons">More details...</button>
      <button aria-label="Buy Toyota Corolla LE" class="card-buttons">Buy</button>
    </footer>
  </article>
`;

  
    cardsSelected.appendChild(card);   

}


const brandfilter=()=>{


  if(brands.value!=="Select an option"){

      var filteredCard=listOfCars.filter(car=>brands.value===Object.keys(car)[0].toLowerCase());

      return filteredCard;
  }


}

const initializeCars=()=>{

  brands.innerHTML="";

  for(let key in carModelDropDown){

      const item=document.createElement("option");
      item.textContent=key;
      item.value=key;
      brands.appendChild(item);
  }  
};

const initializeCarModels=()=>{

  carModels.innerHTML="";

  carModelDropDown[brands.value].forEach(e=>{
    
    const item=document.createElement("option");
    item.textContent=e.toLowerCase();
    item.value=e.toLowerCase();
    carModels.appendChild(item);
  })
}

initializeCars();
initializeCarModels();

brands.addEventListener("change", selectCarModels);

carModels.addEventListener("change",(event)=>{

  const items=brandfilter();

  console.log("Filtered items:", items); // Debugging check


  if(event.target.value!=="Select car models"){

      let specificModels=items.filter((e)=>{
          const firstKey=Object.keys(e)[0];
          console.log("firstKey of the Array",firstKey)
          const models=e[firstKey].Models;
          console.log("second key of the array",models);

          

          const filteredModels=models.filter((e)=>{

              return event.target.value===e.title.toLowerCase()
          
          });


          
          return event.target.value===filteredModels[0].title.toLowerCase();

      });
      

      specificModels.forEach((e)=>{

          const firstKey=Object.keys(e)[0];
          const models=e[firstKey].Models
          cards(models)
      }
  
  );
  }
})