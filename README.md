
# How to deploy the project locally

### 1. Download from repository using HTTPS or SSH route - https://github.com/rohikris81/ct-auto 
### 2. Use CD command to move inside project folder in terminal
### 3. Run the follwing commands
        a) For donwloading all dependices - > npm install
        b) For executing test cases -> npm run wdio ./wdio.conf.js
        c) For report generation - > node_modules/.bin//allure generate allure-results/&& node_modules/.bin/allure open 
