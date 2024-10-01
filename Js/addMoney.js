document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // const addMoney = document.getElementById('add-money-amount').value;
    // const addMoneyPin = document.getElementById('add-money-pin').value;

    const addMoney = getInputFieldValue("add-money-amount");
    const addMoneyPin = getInputFieldValue("add-money-pin");

    if(isNaN(addMoney)){
      alert('Please provide correct number');
      return;
    }

    if (addMoneyPin === 1234) {
      const balance = getTextFieldValue("current-balance");
      const newBalance = addMoney + balance;

      document.getElementById("current-balance").innerText = newBalance;

      // transaction:
      const transactionContent = document.createElement('div');
      transactionContent.classList.add('mt-2')
      transactionContent.innerHTML = `
        <p class = "text-center font-semibold mb-2 text-cyan-700">Money Added:</p>
        <span class = "text-sm font-semibold mx-3 bg-gradient-to-bl from-orange-300 via-orange-200 to-orange-300 p-2 rounded-xl">Added: <span class = "text-xl font-semibold text-orange-700">${addMoney}</span></span>
        <span class = "text-sm font-semibold bg-gradient-to-bl from-lime-500 via-lime-200 to-lime-500 p-2 rounded-xl">New Balance: <span class = "text-xl font-semibold text-lime-600">${newBalance}</span></span>
        <div class = "divider mt-2 mb-1"></div>
        `;
       
       // This should be done in a common function:
       addingTransactionContent(transactionContent);
       

    } else {
      alert("Please provide correct amount and password");
    }
  });
