const delay = require("./delay")

// escrever func calbBom calbRuim antes de dar push

// callback
// delay.delayCallback(1, "1", callbackBom, callbackRuim)
// delay.delayCallback(1, "oi sdds", ((coisa) => console.log(coisa)), (err) => {})

// promise
// delay.delayPromiseBad(1, "oi sdds")
//   .then((coisa) => console.log(coisa))
//   .catch((err) => console.log("erro: ", err))


// async await
delay.darErro = true
async function fazerCoisas() {
  try {
    console.log(1)
    const thing = await delay.delayPromiseBad(1, "coisa")
    console.log(2)
    console.log("coisa:", thing)
  } catch (err) {
    console.log("erro que deu:", err)
  }
}

fazerCoisas()
