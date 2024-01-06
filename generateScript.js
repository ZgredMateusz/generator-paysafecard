document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const numbersContainer = document.getElementById('numbersContainer');
  
    generateButton.addEventListener('click', () => {
      numbersContainer.innerHTML = ''; // Czyszczenie zawartości przed kolejnym generowaniem liczb
  
      for (let i = 0; i < 19; i++) {
        let randomNumber = '0'; // Rozpoczęcie od zera
  
        for (let j = 1; j <= 19; j++) {
          if (j % 5 === 0 && j !== 19) { // Co 4 cyfry, z pominięciem ostatniej
            randomNumber += '-';
          } else {
            randomNumber += Math.floor(Math.random() * 10).toString(); // Generowanie losowej liczby od 0 do 9
          }
        }
  
        const numberElement = document.createElement('div');
        numberElement.textContent = randomNumber;
        numbersContainer.appendChild(numberElement);
      }
    });
  });
  