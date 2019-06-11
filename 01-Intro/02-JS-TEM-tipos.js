// numeros
// não existe int/double/long/short
let num1 = 10
let num2 = 10.23

// bool
let falso = false
let verda = true

// undefined
let undef
console.log(undef)
let myObj = {}
console.log(myObj.propQnaoExiste)

// null
const myNull = null

// string
let myStr1 = "com aspas 'duplas'"
let myStr2 = 'com aspas "simples"'
let myStr3 = `com 'crase', eu posso "injetar" js dentro da string`
let myStr4 = `num1: ${num1}` // "num1: " + num1

// arrays
// def: "listas" de valores válidos em JS
let myArr1 = [1, 2, 3, "string", false, [3, 2, 1]]
const arrBugada = [
  1,
  `com strings. ${3 * 10}`,
  function() { return 56 },
  () => { return 2 }
]

// objetos
// def1: array de duplas (key: value), key -> string, value -> valor válido em JS
// def2: map(key -> string, value -> Any)
let mario = {
  name: "Mario Mario",
  age: 88,
  hasMustache: true,
  brother: {
    name: "Mario Verde Mario"
  },
  jump: function() {
    console.log("yahoo!")
  },
  run() {
  }
}
console.log(mario.name)
console.log(mario.brother.name)
console.log(mario["name"])  // forma bugada

// funções
function add1(x) { return x+1 }
const soma1 = add1
console.log(soma1)
console.log(soma1(5))

const sub1 = function(x) { return x-1 }
console.log(sub1)
console.log(sub1(5))

// arrow functions
const doubleNum = function(x) { return 2*x }
const dobra = (x) => {
  return 2*x
}

// diferença entre as duas
this
function teste1() {
  this.name
}

const teste2 = () => {
  this.name
}