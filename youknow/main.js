import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const processInput = (input) => {
  if (input.length === 3 && input[1] === ' ') {
    let c = input[0]
    let n = input[2]
    if (!isNaN(n)) {
      return c.repeat(n)
    } else {
      return 'Invalid input'
    }
  } else {
    return 'Invalid input'
  }
}

rl.question('Enter a letter and a number: ', (input) => {
  console.log(processInput(input))
  rl.close()
})
