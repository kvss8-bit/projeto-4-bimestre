const express = require('express');
const app = express();
app.use(express.json());

// Simulação da tabela auth_2fa_tokens do Banco de Dados
let db_mock = {
    code_hash: "123456", // Código esperado simulado
    expires_at: Date.now() + 10 * 60 * 1000, // 10 minutos de validade
    attempts: 0
};

// Endpoint obrigatório da especificação: POST /v1/auth/verify-otp
app.post('/v1/auth/verify-otp', (req, res) => {
    const { code } = req.body;
    const agora = Date.now();

    // 1. Verificação de Código Expirado (10 minutos)
    if (agora > db_mock.expires_at) {
        return res.status(400).json({ error: "Código Expirado. Gere um novo código[cite: 20]." });
    }

    // 2. Verificação de Limite de Tentativas Excedido (Máximo 3)
    if (db_mock.attempts >= 3) {
        return res.status(429).json({ error: "Limite de tentativas excedido. Aguarde 2 minutos[cite: 21]." });
    }

    // 3. Verificação de Código Correto
    if (code === db_mock.code_hash) {
        db_mock.attempts = 0; // Reseta tentativas
        return res.status(200).json({ message: "Autenticação realizada com sucesso. Token JWT gerado[cite: 28]." });
    } else {
        db_mock.attempts++;
        return res.status(400).json({ error: `Código incorreto. Tentativas restantes: ${3 - db_mock.attempts}[cite: 19].` });
    }
});

app.listen(3000, () => console.log('Servidor 2FA a rodar na porta 3000 '));
