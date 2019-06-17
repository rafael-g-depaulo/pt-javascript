const url = 'https://animelistcjr.herokuapp.com/descriptions'
const paragArray = []

const removeParag = id => {
  paragArray[id].destroy()
  paragArray.splice(id, 1)
}

axios.get(url+'/1', (err, res) => {
  const paragraphs = res.data.paragraphs
  for (parag of paragraphs) {
    paragArray.push(new Paragraph(parag.text))
  }
  console.log("1", paragArray)
})
console.log("2", paragArray)