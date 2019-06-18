const delay = require('./delay.js')

delay.darErro = false

delay.delayBad(1, "12345")
  .then(thing => console.log("deu bom:", thing))
  .catch(err => console.log(err))

async function fazerCoisas() {
  try {
    console.log(1)
    const thing = await delay.delayBad(1, "coisa")
    console.log(2)
    console.log("coisa:", thing)
  } catch (err) {
    console.log("erro que deu:", err)
  }
}

fazerCoisas()