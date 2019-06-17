// transformando axios.get de Promisse para callback
const axios_get = axios.get
axios.get = (url, callback) => axios_get(url)
  .then(res => callback(undefined, res))
  .catch(err => callback(err))