
// ponto e virgula é automático (e isso pode ser ruim)
function nada() {
  
  // isso da certo
  return 5;
  // retorna 5
  
  
  // isso da errado
  return;
  5;
  // retorna undefined
}

// js não tem tipos
let x
console.log(x)
x = 10
console.log(x)
x = "string"
console.log(x)
x = false
console.log(x)
x = [1, 2, 3]
console.log(x)
