import ExchangeRate from './js/service.js';
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

function calcExchangeAmount(response, dollarAmount, currency) {
  if (currency === 'euros' || currency === 'euro' || currency === 'eur') {
    return dollarAmount * response.conversion_rates.EUR;
  } else if (currency === 'yen' || currency === 'jpy') {
    return dollarAmount * response.conversion_rates.JPY;
  } else if (currency === 'pounds' || currency === 'pound' || currency === 'gbp') {
    return dollarAmount * response.conversion_rates.GBP;
  } else if (currency === 'australian dollars' || currency === 'australian dollar' || currency === 'aud') {
    return dollarAmount * response.conversion_rates.AUD;
  } else if (currency === 'francs' || currency === 'franc' || currency === 'swiss francs' || currency === 'swiss franc' || currency === 'chf') {
    return dollarAmount * response.conversion_rates.CHF;
  } else {
    $('.showInvalidInput').text("Oops, please enter a valid currency.");
    $('.showExchangeRate').hide();
  }
}

function showRate(response, dollarAmount, exchangeAmount, currency) {
  if (response.conversion_rates) {
    $('.showExchangeRate').text(`${dollarAmount} dollar(s) is ${exchangeAmount} ${currency}.`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$('#exchange-button').click(function() {
  event.preventDefault();
  let currency = $('#currency-type').val().toLowerCase();
  let dollarAmount = $('#dollar-amount').val();
  clearFields();
  ExchangeRate.getRate()
    .then(function(response) {
      console.log(response);
      let exchangeAmount = calcExchangeAmount(response, dollarAmount, currency);
      showRate(response, dollarAmount, exchangeAmount, currency);
    });
});
