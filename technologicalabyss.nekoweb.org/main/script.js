// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const img = document.getElementById("envelope");
const sound = document.getElementById("hoverSound");
const sound2 = document.getElementById("hoverSound2");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
	
	setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
	});
	
	// Restart sound each hover
img.addEventListener("mouseenter", () => {
          sound.currentTime = 0; 
          sound.play();
        });
        
	// Optional: Reset when leaving	
img.addEventListener("mouseleave", () => {
          sound.pause();
          sound.currentTime = 0; 
        });
		
catImg.addEventListener("mouseenter", () => {
			  sound2.play();
			});


// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


// Logic to make YES btn grow

 let yesScale = 1;

 yesBtn.style.position = "relative"
 yesBtn.style.transformOrigin = "center center";
 yesBtn.style.transition = "transform 0.3s ease";

 noBtn.addEventListener("click", () => {
     yesScale += 2;

     if (yesBtn.style.position !== "fixed") {
         yesBtn.style.position = "fixed";
         yesBtn.style.top = "50%";
         yesBtn.style.left = "50%";
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }
	 else{
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }
 });


// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";
	hoverSound2.src = "proposal.mp3"

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});