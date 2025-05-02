const counters = [
    { id: "counter1", target: 5000 },
    { id: "counter2", target: 800 },
    { id: "counter3", target: 40 },
  ];
  const duration = 3000;    // Duration in milliseconds
  const frameRate = 60;     // Frames per second

  // Calculations
  const incrementTime = 1000 / frameRate; // Time per frame
  const totalFrames = duration / incrementTime;

  counters.forEach(counter => {
    const element = document.getElementById(counter.id);
    const incrementValue = counter.target / totalFrames;
    let currentNumber = 0;

    // Animation
    const interval = setInterval(() => {
      currentNumber += incrementValue;

      if (currentNumber >= counter.target) {
        currentNumber = counter.target; // Ensure it stops at the target
        clearInterval(interval);
      }

      element.textContent = Math.floor(currentNumber)+"+";
    }, incrementTime);
  });