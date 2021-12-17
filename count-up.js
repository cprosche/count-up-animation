const animateCountUp = (el) => { // el must be an element containing only an integer
  
  const animationDuration = 2; //in seconds
  const frameRate = 24; //Hz,frames per second AKA number of times number is updated per second

  const endValue = parseInt(el.innerHTML);
  let counter = 0;
  const endCounter = animationDuration * frameRate;

  const animationFunction = (end, percent) => {
    // return end*percent; // linear
    return end * (percent * (2 - percent)); // ease in
  };

  let animationInterval = setInterval(() => {
    const percentComplete = counter / endCounter;

    el.innerHTML = Math.ceil(animationFunction(endValue, percentComplete));

    counter++;

    if (counter > endCounter) {
      clearInterval(animationInterval);
    }
  }, 1000 / frameRate);
};

const runAnimations = () => {
  document.querySelectorAll(".countup").forEach(animateCountUp);
};

document.querySelector(".count-up-button").addEventListener('click', () => {
    runAnimations();
})