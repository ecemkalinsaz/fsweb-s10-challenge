import axios from "axios";

export const NOT_EKLE = "NOT_EKLE"
export const NOT_SIL = "NOT_SIL"

export function notEkle(not) {
  return { type: NOT_EKLE, payload: not }
}

export function notSil(notId) {
  return { type: NOT_SIL, payload: notId }
}

export const notEkleAPI = (yeniNot) => dispatch => {
  axios
    .post("https://reqres.in/api/not", yeniNot)
    .then((res) => {
      if (res.status === 201) {
        console.log(res.data)
        dispatch(notEkle(res.data))
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
      }
    })
    .catch((error) => console.log(error));
}

export const notSilAPI = (id) => dispatch => {
  console.log(id)
  axios
    .delete("https://reqres.in/api/not", { data: id })
    .then((res) => {
      if (res.status === 204) {
        console.log(res.data)
        dispatch(notSil(id))
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin 
      }
    })
    .catch((error) => console.log(error));
}