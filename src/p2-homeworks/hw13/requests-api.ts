import axios from 'axios'

export const requestsAPI = {
  sendCheckboxValue(value: boolean) {
    return axios
      .post('https://neko-cafe-back.herokuapp.com/auth/test', { success: value })
      .then((response) => response.data)
      .catch((error) => {
        return error.response ? error.response.data.errorText : error.message
      })
  }
}
