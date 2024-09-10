document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
        // Aqui você pode adicionar o código para enviar o formulário, por exemplo, usando Fetch API ou AJAX
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
