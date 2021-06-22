/*
    how to make HTTP without a third-party library?
    use http or https packages to send requests
    It seems hard to understand because it's low level 
    than the third-party library. So, you have to define
    almost everything.
*/

const https = require("https");
const url = "https://jsonplaceholder.typicode.com/todos/1";

const request = https.request(url, (response) => {
  let data = "";

  // on() - listening for something
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  debugger;

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("error", error);
});

// end() - done setting request
request.end();
