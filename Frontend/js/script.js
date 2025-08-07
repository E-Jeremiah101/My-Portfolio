const text = "Building the web presence you deserve through quality, reliable code that’s designed to grow with your goals.";

  const target = document.getElementById("typing-text");

  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 100); // typing speed (ms)

    }
  
  }

  typeLetter();