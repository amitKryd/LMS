import axios from 'axios'
import { toast } from 'react-toastify'

export function loginApi(data) {
  return new Promise((resolve, reject) =>
    axios
      .post(`${process.env.REACT_APP_API_URL}api/mm/lms`, data)

      .then(function (response) {
        if (response?.status === 200 && response?.data?.data?.type && response?.data?.data?.token) {
          localStorage.setItem('userAuth', JSON.stringify(response?.data?.data?.token))
          
        //   const data = CryptoJS.AES.encrypt(
        //     JSON.stringify(response?.data?.data?.type),
            
        //   ).toString()
          localStorage.setItem('checkType', JSON.stringify("data"))
        } else {
        }
        resolve(response)
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.error)
        reject(error.response.data.error)
      }),
  )
}