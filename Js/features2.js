document.getElementById('btn-clear').addEventListener('click', function(){
    const addMoney = clearingInputField('add-money-amount');
    const addMoneyPin = clearingInputField('add-money-pin');
    const cashOut = clearingInputField('cash-out-amount');
    const cashOutPin = clearingInputField('cash-out-pin');
    const transaction = clearingInputField('transaction-content');
    return addMoney, addMoneyPin, cashOut, cashOutPin, transaction;
})