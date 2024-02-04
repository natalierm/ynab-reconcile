import {ynabConfig, bankAccounts} from './config.js';



async function main() {

    let message: string = "Hello World";
    console.log(message);
    console.log(`api endpoint: ${ynabConfig.apiEndpoint}`);

    const response = await fetch(`${ynabConfig.apiEndpoint}budgets`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${ynabConfig.personalAccessToken}`
        }
    });

    const jsonResponse = await response.json();

    console.log(JSON.stringify(jsonResponse, null, 4));
}


main();

// let's start by authenticating into ynab

// choose budget 2020

//  get the accounts

// get the transactions for the last 30 days for each account.



