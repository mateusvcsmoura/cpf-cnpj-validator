const express = require('express');
const bodyParser = require('body-parser');
const { cpf, cnpj } = require('cpf-cnpj-validator');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/validateCpf', (req, res) => {
    const userCpf = req.body.cpf;
    const isValid = cpf.isValid(userCpf);

    res.send(isValid ? '✅ CPF válido!' : '❌ CPF inválido.');
});

app.post('/validateCnpj', (req, res) => {
    const userCnpj = req.body.cnpj;
    const isValid = cnpj.isValid(userCnpj);

    res.send(isValid ? '✅ CNPJ válido!' : '❌ CNPJ inválido.');
});

app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`);
});

