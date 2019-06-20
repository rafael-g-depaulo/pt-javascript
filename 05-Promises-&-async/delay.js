const delayPromise = (seconds, thing) => new Promise(
    (res, rej) => setTimeout(() => res(thing), seconds*1000)
  )

const delayCallback = (seconds, thing, callback) => setTimeout(() => callback(thing), seconds*1000)

const delayPromiseBad = (seconds, thing,) => new Promise(
    (res, rej) => setTimeout( () => module.exports.darErro
        ? rej("Erro: deu ruim")
        : res(thing),
      seconds*1000)
  )

// exportando coisas
module.exports = {}
module.exports.delayPromiseBad  = delayPromiseBad
module.exports.delayPromise     = delayPromise
module.exports.delayCallback    = delayCallback
module.exports.delay            = delayPromise
module.exports.delayBad         = delayPromiseBad
module.exports.darErro          = false
