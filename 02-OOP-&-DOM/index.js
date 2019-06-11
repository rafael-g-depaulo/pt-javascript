class Ninja {
  #secret = "acabaram as minhas kunais"
  constructor(name) {
    this.name = name
    console.log(`Meu nome é ${name}, e não desistir é o meu jeito ninja de ser.`)
  }

  promote() {
    this.name = this.name + ", Gennin"
  }

  tellsecret() {
    console.log(this.#secret)
  }
}

const Naruto = new Ninja("naruto")

console.log(Naruto)
Naruto.tellsecret()

function clickouEmMim() {
  alert("pq ;-;")
}