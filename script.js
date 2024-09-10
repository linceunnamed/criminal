document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (response.ok) {
            // Login bem-sucedido, redireciona para o site oficial
            window.location.href = '/teste.html'; // Caminho para a nova página

        } else {
            // Login falhou, mostra a mensagem de erro
            document.getElementById('message').textContent = result.message;
            document.getElementById('message').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('message').textContent = 'Erro ao conectar com o servidor.';
        document.getElementById('message').style.color = 'red';
    }
});

