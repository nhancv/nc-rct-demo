import apisauce from 'apisauce'

const create = (baseURL = 'https://api.github.com/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })
  const getUser = username => api.get('search/users', { q: username })

  //Fake data
  const getFakeData = () => {
    return 'Fake data'
  }

  return {
    getFakeData,
    getUser
  }
}

export default {
  create
}
