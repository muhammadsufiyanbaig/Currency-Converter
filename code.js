function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);
  
    const url = `https://v6.exchangerate-api.com/v6/0a3768ac8450e813d1e597f2/latest/${fromCurrency}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        const exchangeRate = data.conversion_rates[toCurrency];
        if (exchangeRate) {
          const convertedAmount = amount * exchangeRate;
          document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        } else {
          document.getElementById('result').innerText = 'Invalid currency selected.';
        }
      })
      .catch(error => {
        console.error('There was a problem converting currency:', error);
        document.getElementById('result').innerText = 'Failed to convert currency.';
      });
  }
  