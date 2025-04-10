const cpfBtn = document.querySelector('#cpfBtn');
const cnpjBtn = document.querySelector('#cnpjBtn');

cpfBtn.addEventListener('click', async function (ev) {
    ev.preventDefault();

    const resultCpf = document.querySelector('#resultCpf');
    resultCpf.innerText = '⏳ Carregando...';

    // Forçando um delay com Promise
    await new Promise(resolve => setTimeout(resolve, 700));

    const cpf = document.querySelector('#cpf').value;

    const response = await fetch('/validateCpf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `cpf=${encodeURIComponent(cpf)}`
    });

    const text = await response.text();
    resultCpf.innerText = text;
});

cnpjBtn.addEventListener('click', async function (ev) {
    ev.preventDefault();

    const resultCnpj = document.querySelector('#resultCnpj');
    resultCnpj.innerText = '⏳ Carregando...';

    // Forçando um delay com Promise
    await new Promise (resolve => setTimeout(resolve, 700));

    const cnpj = document.querySelector('#cnpj').value;

    const response = await fetch('/validateCnpj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `cnpj=${encodeURIComponent(cnpj)}`
    });

    const text = await response.text();
    resultCnpj.innerText = text;
});


