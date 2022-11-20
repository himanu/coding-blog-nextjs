import axios from "axios"

export default async function() {
  try {
    const response = await axios(`${process.env.baseURL}/posts/get-five-newest-posts`)
    return response.data
  } catch(error) {
    return {getDataError: true}
  }
}