import ExchangeRate from './js/service.js';
import calcExchangeAmount from './js/exchange-amount.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

function clearFields() {
  $('#currency-type').val("");
  $('#dollar-amount').val("");
  $('.showInvalidInput').text("");
  $('.showExchangeRate').text("");
  $('.showErrors').text(""); 
}

function showRate(response, dollarAmount, exchangeAmount, currency) {
  $('.showExchangeRate').text(`${dollarAmount} dollar(s) is ${exchangeAmount} ${currency}.`);
}
function errors() {
  $('.showInvalidInput').text("Oops, please enter a valid currency.");
  $('.showExchangeRate').hide();
}

function displayErrors(error) {
  $('.showErrors').text(`${error}`);
}

$('#exchange-button').click(function() {
  event.preventDefault();
  clearFields();
  ExchangeRate.getRate()
    .then(function(response) {
      if (response instanceof Error) {
        throw Error(`Exchange-Rate API error: ${response.message}`);
      }
      let currency = $('#currency-type').val().toLowerCase();
      let dollarAmount = $('#dollar-amount').val();
      let exchangeAmount = calcExchangeAmount(response, dollarAmount, currency);
      if (!exchangeAmount) {
        errors();
      } else {
        showRate(response, dollarAmount, exchangeAmount, currency);
      }
    })
    .catch(function(error) {
      displayErrors(error.message);
    })
});

