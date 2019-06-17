// pegar os paragrafos, chamando a minha API

let myText = []

const baseUrl = "https://animelistcjr.herokuapp.com/"

axios.get(baseUrl+"descriptions/1", (err, res) => {
  if (err) return alert(err)

  const data = res.data
  const paragraphs = data.paragraphs
  
  for (parag of paragraphs) {
    myText.push(new Paragraph(parag.text))
  }

  console.log("1")
})
console.log("2")

const removeParag = id => {
  paragArray[id].destroy()
  paragArray.splice(id, 1)
}