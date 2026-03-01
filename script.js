document.addEventListener("DOMContentLoaded", () => {
  const brand = document.querySelector(".brand-text");
  let glitchIntervalo = null;
  let isGlitching = false; 

  function glitchEffect() {
    if (isGlitching) return; 
    isGlitching = true;

    const originalText = brand.textContent;
    const chars = "█▓▒░▄▀■□▪▫"; 
    let flashes = 0;

    glitchIntervalo = setInterval(() => {
      brand.textContent = originalText
        .split("")
        .map(letter => (Math.random() < 0.5 ? letter : chars[Math.floor(Math.random() * chars.length)]))
        .join("");
        
        flashes++;

      if (flashes > 3) { 
        clearInterval(glitchIntervalo);
        glitchIntervalo = null;
        brand.textContent = originalText;
        isGlitching = false; 
      }
    }, 50);
  }

  brand.style.userSelect = "none";  
  brand.style.outline = "none";     
  brand.style.pointerEvents = "none"; 

  brand.addEventListener("mousedown", e => e.preventDefault());

  setInterval(glitchEffect, 2000);

  setTimeout(() => {
    brand.style.pointerEvents = "auto"; 
  }, 0);
});