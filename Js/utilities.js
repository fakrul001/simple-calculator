function getInputFieldValue(id){
    const addMoney = document.getElementById(id).value;
    const addMoneyNumber = parseFloat(addMoney)
    return addMoneyNumber;
}

function getTextFieldValue(id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance);
    return balanceNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}

function addingTransactionContent(content){
    document.getElementById('transaction-content').appendChild(content);
}

function clearingInputField(id){
    document.getElementById(id).value = '';
    document.getElementById(id).innerText = '';
}