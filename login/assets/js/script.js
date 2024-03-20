document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('name').value.trim();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('E-mail inválido.');
            return;
        }

        fetch('url_endpoint', {
            method: 'POST',
            body: JSON.stringify({ nome, username, email, senha }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    alert('Formulário enviado com sucesso!');
                    form.reset();
                } else {
                    alert('Ocorreu um erro ao enviar o formulário para servidor.');
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao enviar o formulário e seu PC vai explodir em 10 segundos.');
            });
    });
});
