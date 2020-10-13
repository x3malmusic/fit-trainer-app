export const saveToken = (token) => {
  localStorage.setItem(process.env.REACT_APP_NAME, token)
}

export const getToken = () => {
  return localStorage.getItem(process.env.REACT_APP_NAME)
}