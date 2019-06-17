// adicione axios colocando isso no seu html
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

const axios_get = axios.get
axios.get = (url, callback) => axios_get(url)
  .then(res => callback(undefined, res))
  .catch(err => callback(err))