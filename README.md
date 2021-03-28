# Exchange Rate Application

#### An application that converts U.S. dollars to other currencies

#### By **Laurie Waller**

## Technologies Used

* Babel/core 7.6.4
* Babel/plugin-transform-modules-commonjs 7.6.0
* Bootstrap 4.5.0
* clean-webpack-plugin 3.0.0
* CSS
* css-loader 3.2.0
* dotenv-webpack 2.0.0
* eslint 6.3.0
* eslint-loader 3.0.0
* file-loader 1.1.6
* HTML5
* html-loader 0.5.5
* html-webpack-plugin 3.2.0
* JavaScript ES6
* Jest 24.9.0
* jQuery 3.5.1
* Node Package Manager 6.14.9
* popper.js 1.16.1
* style-loader 1.0.0
* webpack 4.39.3
* webpack-cli 3.3.8
* webpack-dev-server 3.8.0

## This application converts the user's chosen amount in U.S. dollars into a different currency of the user's choice. The application is set to handle euros, Japanese yen, British pounds, Australian dollars, and Swiss francs.

## Setup/Installation Requirements

  1. Go to the main page of the repository (https://github.com/lauriewaller/exchange-rate)
  2. In the top righthand corner of the list of files, click the Code dropdown menu.
  3. Click on the clipboard icon to copy the URL to the GitHub repo.
  4. On your computer, open Terminal and navigate to the folder where you plan to clone the repo folder.
  5. Type in `git clone` and then paste the URL you copied:
      `git clone https://github.com/lauriewaller/exchange-rate`. Press Enter.
  6. One great application to open your files in is Visual Studio Code. To download VS Code, go to https://code.visualstudio.com/ and click on Download in the top righthand corner. From there, choose the download type necessary for your computer and follow the prompts.
  7. After you have completed the VS Code download, return to Terminal. After you've ensured you are still in the root directory of the folder you wish to open, type `code .` and press Enter. This will open the application files in VS Code for you.
  8. To create the necessary API key, go to `https://www.exchangerate-api.com/`. Click on "Get Free Key" and then enter your email and choose a password. Once you've submitted your email and password, copy the API key.
  9. Go to Terminal and type `npm install`. Next, type `npm run build` to set up the dependencies and environment for the project. 
  10. In the root directory, create a file titled ".env". Inside this file, add `API_KEY=`. On the same line, directly after `API_KEY=`, copy your API key from ExchangeRate-API. Save the file.
  11. To display the application in the browser, type `npm start` in Terminal.

## Known Bugs

* No known bugs at this time.

## License

MIT

Copyright (c) 2021 by Laurie Waller

## Contact Information

_Laurie Waller (lauriewaller7@gmail.com)_