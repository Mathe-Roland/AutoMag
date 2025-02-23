export const checkIfAnimationWasDone = () => {
  if (localStorage.getItem("areHeaderAnimationsDone") !== "true") {
    const mainHeading = document.querySelector('header.layout-header h1');
    const mainSubHeading = document.querySelector('header.layout-header h2');
    const mainMenu = document.querySelector('nav.main-nav');

    if (mainHeading) {
      mainHeading.classList.add('animation-for-header-title');
    }

    if (mainSubHeading) {
      mainSubHeading.classList.add('animation-for-header-title');
    }

    if (mainMenu) {
      mainMenu.classList.add('animation-for-navbar')
    }
    
    localStorage.setItem("areHeaderAnimationsDone", "true");
  }
} 