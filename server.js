const express = require('express');
const bodyParser = require('body-parser');
const { cpf, cnpj } = require('cpf-cnpj-validator');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

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

app.post('/generateCpf', (req, res) => {
    const newCpf = cpf.generate();
    const newCpfFormatted = cpf.format(newCpf);

    res.send(newCpf ? newCpfFormatted : '❌ Erro.');
});

app.post('/generateCnpj', (req, res) => {
    const newCnpj = cnpj.generate();
    const newCnpjFormatted = cnpj.format(newCnpj);

    res.send(newCnpj ? newCnpjFormatted : '❌ Erro.');
});

app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`);
});

