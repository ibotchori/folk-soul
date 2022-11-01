import axios from 'axios'

// Login user
const login = async (userData: any) => {
  const response = await axios.post(
    'https://folk-soul-api.ibotchori.space/api/user/login',
    userData
  )
  return response.data.token
}

const authService = {
  login,
}

export default authService
