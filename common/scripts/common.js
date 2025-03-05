export const checkIfHeaderAnimatiosnWereDone = () => {
  if (localStorage.getItem("areHeaderAnimationsDone") !== "true") {
    const mainHeading = document.querySelector('header.header h1');
    const mainSubHeading = document.querySelector('header.header h2');
    const mainMenu = document.querySelector('nav.main-nav');

    if (mainHeading) {
      mainHeading.classList.add('animations-slide-left');
    }

    if (mainSubHeading) {
      mainSubHeading.classList.add('animations-slide-left');
    }

    if (mainMenu) {
      mainMenu.classList.add('animation-slide-down')
    }
    
    localStorage.setItem("areHeaderAnimationsDone", "true");
  }
} 