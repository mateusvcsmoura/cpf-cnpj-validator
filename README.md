# Validador de CPF e CNPJ

Projeto simples feito com **Node.js** e bibliotecas do **npm** para validar **CPF** e **CNPJ** via interface web.

> ⚠️ Este projeto foi desenvolvido apenas para fins de estudo e prática com bibliotecas npm.  
> Não deve ser usado em produção sem ajustes e melhorias.

---

## 🔧 Tecnologias utilizadas

- **Node.js**
- **Express**
- **cpf-cnpj-validator**
- HTML, CSS e JavaScript (frontend puro)

---

## 💡 Funcionalidades

- Interface simples com campos para digitar um **CPF** ou **CNPJ**.
- Validação é feita no backend usando a biblioteca [`cpf-cnpj-validator`](https://www.npmjs.com/package/cpf-cnpj-validator).
- Retorno visual indicando se o valor digitado é **válido** ou **inválido**.
- Feedback visual de **"⏳ Carregando..."** durante a validação.

---

## ▶️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/mateusvcsmoura/cpf-cnpj-validator.git
   cd cpf-cnpj-validator
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node server.js
   ```

4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## 📁 Estrutura do projeto

```
├── public/
│   ├── index.html
│   ├── css/
│   └── dist/
├── server.js
├── package.json
└── README.md
```

---

## 🧠 Objetivo

Este projeto tem como principal objetivo **praticar o uso de bibliotecas do npm no Node.js**, junto com a criação de um backend simples usando Express e a integração com frontend básico.

---

## ✍️ Autor

**Mateus Moura**  
Estudante de Análise e Desenvolvimento de Sistemas – Fatec Zona Sul