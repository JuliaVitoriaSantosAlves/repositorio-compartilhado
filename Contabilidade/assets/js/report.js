function gerarBalancoPatrimonial() {
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    var ativos = 0;
    var passivos = 0;

    transactions.forEach(function (transaction) {
        if (transaction.categoria === 'ativos') {
            ativos += parseFloat(transaction.valor);
        } else if (transaction.categoria === 'passivos') {
            passivos += parseFloat(transaction.valor);
        }
    });

    var patrimonioLiquido = ativos - passivos;

    var resultadoBalancoPatrimonial = document.getElementById("resultadoBalancoPatrimonial");
    resultadoBalancoPatrimonial.innerHTML = "<p>Total de Ativos: R$ " + ativos.toFixed(2) + "</p>";
    resultadoBalancoPatrimonial.innerHTML += "<p>Total de Passivos: R$ " + passivos.toFixed(2) + "</p>";
    resultadoBalancoPatrimonial.innerHTML += "<p>Patrimônio Líquido: R$ " + patrimonioLiquido.toFixed(2) + "</p>";
}

function gerarFluxoCaixa() {
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    var periodo = document.getElementById("periodoFluxoCaixa").value;

    var entradas = 0;
    var saidas = 0;

    var periodoAtual = new Date().toLocaleDateString('pt-BR', { [periodo]: 'numeric' });

    transactions.forEach(function (transaction) {
        var data = new Date(transaction.data);
        var periodoTransacao = data.toLocaleDateString('pt-BR', { [periodo]: 'numeric' });

        if (periodoTransacao === periodoAtual) {
            if (transaction.categoria === 'receitas' || transaction.categoria === 'ativos') {
                entradas += parseFloat(transaction.valor);
            } else if (transaction.categoria === 'despesas' || transaction.categoria === 'passivos') {
                saidas += parseFloat(transaction.valor);
            }
        }
    });

    var resultadoFluxoCaixa = document.getElementById("resultadoFluxoCaixa");
    resultadoFluxoCaixa.innerHTML = "<p>Entradas: R$ " + entradas.toFixed(2) + "</p>";
    resultadoFluxoCaixa.innerHTML += "<p>Saídas: R$ " + saidas.toFixed(2) + "</p>";
}

function gerarDemonstracaoResultados() {
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    var periodo = document.getElementById("periodoDemonstracaoResultados").value;

    var receitas = 0;
    var custos = 0;
    var despesas = 0;

    var periodoAtual = new Date().toLocaleDateString('pt-BR', { [periodo]: 'numeric' });

    transactions.forEach(function (transaction) {
        var data = new Date(transaction.data);
        var periodoTransacao = data.toLocaleDateString('pt-BR', { [periodo]: 'numeric' });

        if (periodoTransacao === periodoAtual) {
            if (transaction.categoria === 'receitas') {
                receitas += parseFloat(transaction.valor);
            } else if (transaction.categoria === 'despesas') {
                despesas += parseFloat(transaction.valor);
            } else if (transaction.categoria === 'ativos') {
                custos += parseFloat(transaction.valor);
            }
        }
    });

    var lucroOuPrejuizo = receitas - custos - despesas;

    var resultadoDemonstracaoResultados = document.getElementById("resultadoDemonstracaoResultados");
    resultadoDemonstracaoResultados.innerHTML = "<p>Receitas: R$ " + receitas.toFixed(2) + "</p>";
    resultadoDemonstracaoResultados.innerHTML += "<p>Custos: R$ " + custos.toFixed(2) + "</p>";
    resultadoDemonstracaoResultados.innerHTML += "<p>Despesas: R$ " + despesas.toFixed(2) + "</p>";
    resultadoDemonstracaoResultados.innerHTML += "<p>Lucro/Prejuízo: R$ " + lucroOuPrejuizo.toFixed(2) + "</p>";
}