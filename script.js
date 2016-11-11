/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

// function cycle(times) {
//   const startButton = document.querySelector('button');
//   console.log(redLight);
// }

(function () {

  function turnGreen() {
    greenLight.style.backgroundColor = 'green';
    yellowLight.style.backgroundColor = 'black';
    redLight.style.backgroundColor = 'black';
  }
  function turnYellow() {
    greenLight.style.backgroundColor = 'black';
    yellowLight.style.backgroundColor = 'yellow';
    redLight.style.backgroundColor = 'black';
  }
  function turnRed() {
    greenLight.style.backgroundColor = 'black';
    yellowLight.style.backgroundColor = 'black';
    redLight.style.backgroundColor = 'red';
  }

  //RED LIGHT
  const redLight = document.getElementById('stopLight');
  const stopButton = document.getElementById('stopButton');
  stopButton.addEventListener('click', turnRed);

  // YELLOW LIGHT
  const yellowLight = document.getElementById('slowLight');
  const slowButton = document.getElementById('slowButton');

  slowButton.addEventListener('click', turnYellow);

  // GREEN LIGHT
  const greenLight = document.getElementById('goLight');
  const goButton = document.getElementById('goButton');
  goButton.addEventListener('click', turnGreen);

  // MOUSEOVER/MOUSEOUT logs
  const buttons = document.getElementById('controls').querySelectorAll('h1');
  for (const button of buttons) {
    button.addEventListener('mouseover', () => {
      console.log(`Entered ${button.textContent} button`);
    });
    button.addEventListener('mouseout', () => {
      console.log(`Left ${button.textContent} button`);
    });
  }

  // MOUSEOVER as a group
  const controlsDiv = document.getElementById('controls');
  controlsDiv.addEventListener('mouseover', () => {
    for (const button of buttons) {
      button.addEventListener('click', () => {
        console.log(button.textContent);
      });
    }
  });

  // BONUS!! Timing each light realistically

  const startCycle = document.getElementsByTagName('button')[0];
  console.log(startCycle);
  // startCycle.addEventListener('click', () => {
  //   window.setTimeout(function () {
  //     turnRed();
  //     window.setTimeout(function () {
  //       turnGreen();
  //       window.setTimeout(function() {
  //         turnYellow();
  //       }, 3000)
  //     }, 2000)
  //   }, 1000);
  // });

  startCycle.addEventListener('click', () => {
    let intervalFunctions = [turnRed, turnGreen, turnYellow];
    let intervalIndex = 0;
    const go = setInterval(() => {
      intervalFunctions[intervalIndex++ % intervalFunctions.length]();
    }, 1000);
    const stopCycle = document.getElementsByTagName('button')[1];
    stopCycle.addEventListener('click', () => {
      clearInterval(go);
    });
  });




})();
