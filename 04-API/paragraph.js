const elementoPai = document.querySelector(".main")

class Paragraph {

  constructor(text) {
    this.text = text
    
    this.render()
    this.domObject = elementoPai.lastChild
  }
  
  render() {
    // Lembre de dar uma olhada na documentação do insertAdjacentHTML
    elementoPai.insertAdjacentHTML("beforeend", this.getHtml())
  }

  toUpperCase() {
    const myText = this.text
    this.text = myText.toUpperCase()
    this.domObject.innerText = this.text
  }

  insertPhrase(phrase) {
    this.text += ` ${phrase}.`
    this.domObject.innerHTML = this.text
  }

  capitalize() {
    this.text = this.text
      .split('. ')
      .map(str => str[0].toUpperCase() + str.toLowerCase().slice(1))
      .join('. ')
    this.domObject.innerHTML = this.text
  }

  getHtml() {
    return `<p>${this.text}</p>`
  }

  destroy() {
    this.domObject.remove()
  }
}
