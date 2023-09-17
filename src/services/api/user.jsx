import { __fetch as fetch } from "./services";

const API_url = 'https://reqres.in/api/'

export const SignupService = (options) => {

    return fetch('post',API_url+'register',options)
}
export const LoginService = (options) => {

    return fetch('post',API_url+'login',options)
}


