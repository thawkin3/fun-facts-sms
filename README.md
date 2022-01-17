# Fun Facts SMS

This is an app built with Node and Express that allows users to enter their phone number to receive an SMS text with a fun fact. The SMS integration is built using [Infobip](https://www.infobip.com/).

![Step 1](./demo-screenshots/FunFactsSMS1.png)
![Step 2](./demo-screenshots/FunFactsSMS2.png)
![Step 3](./demo-screenshots/FunFactsSMS3.png)

## Running the App Locally

There are two environment variables the app needs. Create an `.env` file with variables for `API_KEY` and `API_BASE_URL`. Those values can be obtained after creating a free account with [Infobip](https://www.infobip.com/). Once you have an account created and your `.env` file populated with your secrets, follow these instructions to start the app.

1. `yarn install`
2. `yarn start`
3. Navigate to http://localhost:3000 in your browser

## NPM Scripts

- `format`: Formats the code using Prettier
- `format-watch`: Formats the code using Prettier in watch mode
- `start`: Starts the app locally with a Node Express.js server running on port 3000

## Resources

### Infobip

- API Docs: https://www.infobip.com/docs/api
- SMS API Docs: https://www.infobip.com/docs/sms/api
- API Authentication Docs: https://www.infobip.com/docs/essentials/api-authentication#api-key-header
- Various Use Cases: https://www.infobip.com/docs/use-cases

### Other Tools

- Express.js: https://expressjs.com/
- Prettier: https://prettier.io/
- on-change: https://www.npmjs.com/package/on-change
