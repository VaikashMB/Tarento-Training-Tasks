import { atom } from "recoil";

export const userState = atom({
    key: 'user',
    default: ''
  })

  export const emailState = atom({
    key: 'email',
    default: ''
  }) 

  export const passwordState = atom({
    key: 'password',
    default: ''
  })
