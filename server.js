const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname)));

// Endpoint para login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulação de banco de dados
    const users = [
        { username: 'lince', password: 'kauan2708' }
        { username: 'admin', password: '7' }
    ];

    // Verifica credenciais
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
        res.status(401).json({ message: 'Usuário ou senha incorretos.' });
    }
});

// Rota para a página inicial, que serve o formulário de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
