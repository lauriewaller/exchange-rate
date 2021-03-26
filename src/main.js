import ExchangeRate from './js/service.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

function calcRate(response) {
  if (response) {
    console.log(response);
    let dollarAmount = $('#dollar-amount').val();
    $('.showExchangeRate').text(`${dollarAmount} dollar(s) is ${response.conversion_rate} euros.`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$('#exchange-button').click(function() {
  event.preventDefault();
  let currency = $('#currency-type').val();
  console.log(currency)
  ExchangeRate.getRate()
    .then(function(response) {
      calcRate(response);
    });
});
