import { atom } from "recoil"

export const usernameState = atom({
    key: 'username',
    default: 'User'
  })

  export const emailState = atom({
    key: 'email',
    default: ''
  })

  export const phoneState = atom({
    key: 'phone',
    default: ''
  })

  export const dobState = atom({
    key: 'dob',
    default: ''
  })

  export const addressState = atom({
    key: 'address',
    default: ''
  })

  export const passwordState = atom({
    key: 'password',
    default: ''
  })

