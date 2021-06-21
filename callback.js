// how to use callback function

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;
    callback(sum);
  }, 2000);
  console.log("calculating...");
};

add(1, 3, (sum) => {
  console.log(sum);
});
