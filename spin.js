const wheel = document.querySelector('.spinBorder');
    const spinButton = document.getElementById('spinBtn');
    let spinning = false;
const spinSfx = document.getElementById("spinAudio");
let currentRotation = 0; 

    spinButton.addEventListener('click', () => {
      if (spinning) return; // Prevent multiple spins
      spinning = true;
        spinSfx.play();
      const randomDegree = Math.floor(Math.random() * 360) + 3600; // At least 10 full spins
      currentRotation += randomDegree; // Add to previous rotation
      wheel.style.transform = `rotate(${currentRotation}deg)`;
      setTimeout(() => {
        const finalDegree = randomDegree % 360;
        let result;
        
        // Determine the result based on the final degree
        if (finalDegree <= 36) result = "Prize 1";
        else if (finalDegree <= 72) result = "Prize 2";
        else if (finalDegree <= 108) result = "Prize 3";
        else if (finalDegree <= 144) result = "Prize 4";
        else if (finalDegree <= 180) result = "Prize 5";
        else if (finalDegree <= 216) result = "Prize 6";
        else if (finalDegree <= 252) result = "Prize 7";
        else if (finalDegree <= 288) result = "Prize 8";
        else if (finalDegree <= 324) result = "Prize 9";
        // else if (finalDegree <= 360) result = "Prize 10";
        
        else result = "Prize 10";

        alert(`Congratulations! You won ${result}`);
        spinning = false
        
        ;
      }, 4000);
      // Match the transition duration
        // wheel.rotate = `z ${value}deg`; 
    }
    );