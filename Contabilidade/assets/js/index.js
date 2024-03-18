
function updateTransactionData() {
    // Verificar se há dados armazenados no localStorage
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // Exibir os dados na tabela
    var tableBody = document.getElementById("transactionData");
    tableBody.innerHTML = ""; // Limpar a tabela antes de atualizar

    transactions.forEach(function (transaction, index) {
        var row = "<tr>";
        row += "<td>" + transaction.categoria + "</td>";
        row += "<td>" + transaction.acao + "</td>";
        row += "<td>" + transaction.descricao + "</td>";
        row += "<td>" + "R$ " + transaction.valor + "</td>";
        row += "<td>" + transaction.data + "</td>";
        row += "<td><button onclick='removerEntrada(" + index + ")'>Excluir</button></td>";
        row += "</tr>";
        tableBody.innerHTML += row;
    });
}

function filtrarPorCategoria() {
    var filtroCategoria = document.getElementById("filtroCategoria").value.toLowerCase();
    var rows = document.getElementById("transactionData").getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var categoria = cells[0].innerText.toLowerCase();
        if (categoria === filtroCategoria || filtroCategoria === "patrimonio") {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function removerEntrada(index) {
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.splice(index, 1);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateTransactionData();
}

// Chamar a função de atualização imediatamente ao carregar a página
window.onload = updateTransactionData;