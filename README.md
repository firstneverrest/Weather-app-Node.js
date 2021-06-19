# Weather application

## How does asynchronous works
1. Call Stack - data structure provided by V8 JavaScript engine, use to keep track the execution of the program.
2. Node APIs - when asynchronous function is used, it will come to this Node APIs and not block the other works.
3. Callback Queue - when the asynchronous function is ready to executed, it will come to the callback queue to execute.

**Tips:** setTimeout() is not default provided in JavaScript or V8 but Node.js use C++ to create this function.

## Make HTTP request
1. use [weatherstack API](https://weatherstack.com/) to send request for weather information. These following are steps to use weatherstack API
2. use *request* npm package to make HTTP request but now it's deprecated, you can use the *postman-request* instead.
3. 
   
