const appName = 'fit-trainer-app'

export const saveToken = (token) => {
  localStorage.setItem(appName, token)
}

export const getToken = () => {
  return JSON.parse(localStorage.getItem(appName))
}

export const deleteToken = () => {
  localStorage.removeItem(appName)
}

