function submitForm() {
    var form = document.getElementById("transactionForm");
    var formData = new FormData(form);

    // Adicionar data atual aos dados do formulário
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    formData.append("data", date);

    // Armazenar os dados temporariamente no localStorage
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    var newTransaction = Object.fromEntries(formData.entries());
    transactions.push(newTransaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    // Limpar o formulário
    form.reset();
}
