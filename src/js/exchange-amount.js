export default function calcExchangeAmount(response, dollarAmount, currency) {
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
  } 
}