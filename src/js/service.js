export default class ExchangeRate {  
  static getRate(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}