document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const moneyWithdrawn = getInputFieldValue('cash-out-amount');
    const moneyWithdrawnPin = getInputFieldValue('cash-out-pin');

    if(isNaN(moneyWithdrawn)){
        alert('Please provide correct number');
        return;
    }

    if(moneyWithdrawnPin === 1234){
        const balance = getTextFieldValue('current-balance');

        if(moneyWithdrawn > balance){
            alert('You do not have sufficient balance. Please recharge!!');
            return;
        }

        const newBalance = balance - moneyWithdrawn;
        document.getElementById('current-balance').innerText = newBalance;

        // transaction:
        const p = document.createElement('p');
        p.classList.add('text-center', 'font-semibold', 'mb-2', 'text-amber-400');
        p.innerText = 'Money Withdrawn:'
        const span = document.createElement('span');
        span.classList.add('text-sm', 'font-semibold', 'mx-3', 'bg-gradient-to-bl', 'from-orange-300', 'via-orange-200', 'to-orange-300', 'p-2', 'rounded-xl');
        span.innerHTML = `Withdraw: <span class = "text-xl font-semibold text-orange-700">${moneyWithdrawn}</span>`;
        const span2 = document.createElement('span');
        span2.classList.add('text-sm', 'font-semibold', 'bg-gradient-to-bl', 'from-red-400', 'via-red-300', 'to-red-400', 'p-2', 'rounded-xl');
        span2.innerHTML = `New Balance: <span class = "text-xl font-semibold text-red-600">${newBalance}</span></span>`;
        const divider = document.createElement('div');
        divider.classList.add('divider', 'mt-2', 'mb-2');

        // this should be done in a common function:
        addingTransactionContent(p);
        addingTransactionContent(span);
        addingTransactionContent(span2);
        addingTransactionContent(divider);

    }
    else{
        alert('please provide correct amount and password')
    }

})