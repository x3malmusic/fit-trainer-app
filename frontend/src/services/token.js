const appName = 'fit-trainer-app'

export const saveToken = (token) => {
  localStorage.setItem(appName, token)
}

export const getToken = () => {
  return localStorage.getItem(appName)
}