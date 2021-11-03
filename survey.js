const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name? `, (answer) => {
  rl.question(`What is your height? `, (height) => {
    rl.question(`What's an activity you like doing? `, (activity) => {
      rl.question(`What do you listen to while doing that? `, (listen) => {
        rl.question(`Which meal is your favourite `, (meal) => {
          console.log(
            `${answer} is ${height}. They like ${activity} and listen's to ${listen} while doing ${activity}. And you guessed it, their favourite meal is....${meal}`
          );
          rl.close();
        });
      });
    });
  });
});
