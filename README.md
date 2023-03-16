# React Single Page Application for FX Rate Conversion

This is a single page application built using React that allows users to convert an amount from EUR to USD or vice versa based on the current FX rate. It also allows users to override the FX rate and provides a historical table of the last 5 conversions.

## Features

1. Display a result corresponding to EUR/USD fx rate. It will be set to 1.1 by default. Every 3 seconds, a random value comprised between -0.05 and +0.05 will be added to (or subtracted from) the initial value.
This feature involves displaying the current EUR/USD FX rate on the page. The rate will be set to 1.1 by default, but every 3 seconds, a random value between -0.05 and +0.05 will be added to or subtracted from the initial value to simulate a fluctuation in the rate.
2. Build a Front page in React allowing the user to enter an amount in EUR and displaying the converted value in USD, taking the fx rate into account.
This feature involves building a front page in React that allows users to enter an amount in EUR and see the converted value in USD based on the current FX rate. The conversion will be done in real-time, and the result will be displayed immediately.
3. Implement a polling allowing the update of the USD part depending on the fx rate.
This feature involves implementing a polling mechanism that allows the USD part of the page to update dynamically based on the current FX rate. The page will periodically request the current FX rate from a server and update the display accordingly.
4. Add a switch to enter an amount in USD instead of EUR: a. Switch set to "EUR": the amount is entered in EUR and result value in USD b. Switch set to "USD": the amount is entered in USD and result value in EUR
This feature involves adding a switch to the page that allows users to choose whether to enter an amount in EUR or USD. When the switch is set to "EUR", the user will enter an amount in EUR, and the result value will be displayed in USD. When the switch is set to "USD", the user will enter an amount in USD, and the result value will be displayed in EUR.
5. Make sure there is a continuity in the values: when the switch is activated the former output should become the new entry.
This feature involves ensuring that there is continuity in the values when the user switches between entering an amount in EUR or USD. Specifically, when the switch is activated, the former output should become the new entry. This ensures that the user can easily switch back and forth between the two currencies without having to re-enter the amount.
6. Add a field to override the fx rate.
This feature involves adding a field to the page that allows the user to override the current FX rate. The user can enter a new value in this field, and the page will use this value for the conversion instead of the current FX rate.
7. Deactivate the override on the fx rate (if activated) when there is a 2% difference with the real-time fx rate. The conversion should then be done using the real-time one.
This feature involves deactivating the override on the FX rate if there is a 2% difference between the override value and the real-time FX rate. When this occurs, the page will revert to using the real-time FX rate for the conversion instead of the overridden value.
8. Display a table with historical data of the 5 last results (corresponding to the 5 last conversions).
This feature involves displaying a table on the page that shows the historical data for the last 5 conversions. Specifically, the table will display the real-time FX rate, the override value (if applicable), the initial amount entered by the user, and the converted amount.
9. The historical table displays the real-time FX rate, the override, the initial amount with the associated currency, and the converted amount with the associated currency.

## Installation

1. Clone this repository using `git clone https://github.com/<username>/<repository>.git`.
2. Navigate to the project directory using `cd <repository>`.
3. Install the necessary dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open the application in your browser at `http://localhost:3000`.

## Technologies Used

- React
- Bootstrap 5

## Acknowledgements

This application was built based on the requirements provided for assessment.