const cpfBtn = document.querySelector('#cpfBtn');
const cnpjBtn = document.querySelector('#cnpjBtn');

const cpfGenBtn = document.querySelector('#cpfGenBtn');
const cpfGenCopyBtn = document.querySelector('#cpfGenCopyBtn');

const cnpjGenBtn = document.querySelector('#cnpjGenBtn');
const cnpjGenCopyBtn = document.querySelector('#cnpjGenCopyBtn');

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

cpfGenBtn.addEventListener('click', async function (ev) {
    ev.preventDefault();

    const resultCpf = document.querySelector('#cpfGenerated');
    resultCpf.value = '⏳ Gerando...';

    // Forçando um delay com Promise
    await new Promise (resolve => setTimeout(resolve, 500));

    const response = await fetch('/generateCpf', { method: 'POST' });

    const newCpf = await response.text();
    resultCpf.value = newCpf;
});

cnpjGenBtn.addEventListener('click', async function (ev) {
    ev.preventDefault();

    const resultCnpj = document.querySelector('#cnpjGenerated');
    resultCnpj.value = '⏳ Gerando...';

    // Forçando um delay com Promise
    await new Promise (resolve => setTimeout(resolve, 500));

    const response = await fetch('/generateCnpj', { method: 'POST' });

    const newCnpj = await response.text();
    resultCnpj.value = newCnpj;
});

cpfGenCopyBtn.addEventListener('click', function (ev) {
    ev.preventDefault();

    const resultCpf = document.querySelector('#cpfGenerated').value;

    if (resultCpf) {
        navigator.clipboard.writeText(resultCpf);
    }
});

cnpjGenCopyBtn.addEventListener('click', function (ev) {
    ev.preventDefault();

    const resultCnpj = document.querySelector('#cnpjGenerated').value;

    if (resultCnpj) {
        navigator.clipboard.writeText(resultCnpj);
    }
});
