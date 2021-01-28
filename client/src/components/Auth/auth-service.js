import axios from 'axios';

const service = axios.create({
  baseURL: `${process.env.REACT_APP_APIURL || ""}`,
  withCredentials: true
});
export default service;

function signup(username, email, password, confirmedPassword) {
  return service.post('/auth/signup', {username, email, password, confirmedPassword}).then(response => response.data)
}
export {signup}

function loggedin() {
  return service.get('/auth/loggedin').then(response => response.data)
}
export {loggedin}

function login(email, password) {
  return service.post('/auth/login', {email, password}).then(response => response.data)
}
export {login}

function logout() {
  return service.post('/auth/logout', {}).then(response => response.data)
}
export {logout}

function upload(formdata) {
  return service.post('/upload', formdata).then(response => response.data)
}
export {upload}

