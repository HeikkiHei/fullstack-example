const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
console.log(tSquared)
// tSquared is now [1, 4, 9]

function product(a, b) {
  return a * b
}

const product2 = (a, b) => 
  a * b

const product3 = (a, b) => {
  console.log('')
  return (a * b)
}

const product4 = function(a, b) {
  return (a * b)
}