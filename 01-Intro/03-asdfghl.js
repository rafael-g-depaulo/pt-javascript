

const funcaoMalProjetada = () => {
  if (true)
    throw new Error("deu ruim")
  
  console.log("nunca executa")
}

try {
  const x = 15 * 29
  const myInfo = funcaoMalProjetada()
  console.log("tbm não executa")
} catch (erro) {
  console.log(`deu o erro: ${erro}`)
} finally {
  console.log("dando certo ou n, me execute")
}