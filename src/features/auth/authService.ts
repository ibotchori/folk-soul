import axios from 'axios'

export const getAllMembers = async () => {
  const response = await axios.get(
    'https://folk-soul-api.ibotchori.space/api/band-member/get-all'
  )
  return response.data
}
