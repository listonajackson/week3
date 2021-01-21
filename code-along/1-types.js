function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
    
  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  let x
  x = 5
  console.log(x)

  let y = 14
  console.log(y)
  y = y + 1 // now y is 15
  console.log(y)

  let z = x + y

  let output = z

  let quantity = 5 // Number
  let food = 'tacos' // String (needs to be in quotes)
  let withSalsa = true //Boolean (true/false not in quotes)

  // output = 'I love ' + food 
  //output = 'I would like ' + quantity + ' ' + food
  output = `I would like ${quantity} ${food}` //back ticks instead of single quotes
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}