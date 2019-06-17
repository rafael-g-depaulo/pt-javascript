<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
const axios = require('axios')

// transformando axios em callback
const axios_get = axios.get
axios.get = (url, callback) => axios_get(url)
  .then(res => callback(undefined, res))
  .catch(err => callback(err))
// transformando axios em callback

// http://dontpad.com/animelistcjr

const url = 'https://animelistcjr.herokuapp.com/descriptions'

// axios.get(url, (err, res) => err ? console.log(err, "err") : console.log(res, "res"))
const myParags = []
axios.get(url+'/1', (err, res) => {
  const parag = res.data.paragraphs
  for (parag of paragraphs) {
    myParags.push(parag.text)
  }
  console.log("1", myParags)
})
console.log("2", myParags)

// with axios & callback
// axios.get(url, (err, res) => {
//   console.log(res)
// })

// with axios & async await
// ;(async function() {
//   const resposta = await axios.get(url)
//   console.log(resposta)
// })()

// with axios & promisses
// axios.get(url)
//   .then(res => console.log(res))