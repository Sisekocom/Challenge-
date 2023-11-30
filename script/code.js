
function numbers() {
    return new Promise((resolve, reject) => {
    let number1 = prompt("Enter the first number:");
    let number2 = prompt("Enter the second number:");
         if (isNaN(number1) || isNaN(number2)) {
            reject(`Both, or either ${isNaN(number1) ? number1 : number2} ${isNaN(number1) ? 'is' : 'are'} not number(s).`);
          } else {
            let sum = Number(number1) + Number(number2);
            resolve(`${number1} + ${number2} = ${sum}`);
          }
        });
      }
numbers()
.then(result => {
  console.log(result); 

  +
  0 
})
.catch(error => {
  console.error(error); 
});

  