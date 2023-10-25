#### Goals
Main goal of this repo is showed my hard skills in automation testing field.

#### Website:
The website which I automated is: https://www.gov.pl/<br>

#### Tools:
1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript#) <br>
2. [Cypress.io](https://docs.cypress.io/) <br>

#### Target User Scenario: 

1. User should search for a phrase and get relevant results: the list of results should include the query in the title.
   
2. User should be able to filter search results: period of time, ministry unit - example: 'okres roczny', 'Biuletyn Informacji Publicznej'.
   
3. User should has access to selected tabs: "Dla obywatela", "Dla Przedsiębiorcy", "Dla Urzędnika", "Dla Rolnika".
   
4. User should be able to check special information by a search query - example: 'query: Mandat, result: Odwołaj się od mandatu drogowego'

#### Command to run:
1. Open the console or terminal on your local machine.
   
2. Clone this repository to your local machine using console:
```sh
git clone https://github.com/maciejleoniak/gov_automated_testing_with_cypress.git
```
3. Go to the repository directory:
```sh
cd gov_automated_testing_with_cypress
```
4. Install the dependencies using the following command:
 ```sh
npm install
```
5. Run all tests using console:
```sh
npx cypress run
```

#### Result of tests 

![Result of tests - screenshot](./cypress/screenshots/results/Screenshot%202023-10-25%20at%2022.31.34.png)
