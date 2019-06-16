
const myText = [
  "no início, ele era triste e solitário.",
  "mas ele conquistou os nossos corações.",
  "e nos deu esperança para o futuro.",
  "e ao fim, virou hokage.",
]

const paragArray = []
for (let i = 0; i < myText.length; i++) {
  paragArray.push(new Paragraph(myText[i]))
}

const removeParag = id => {
  paragArray[id].destroy()
  paragArray.splice(id, 1)
}