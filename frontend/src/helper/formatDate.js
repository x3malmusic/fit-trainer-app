export const formatDate = (date) => {
  const year = date.getFullYear()
  let month = date.getMonth() + 1 + ''
  let day = date.getDate() + ''

  if(month.length === 1) month = '0' + month
  if(day.length === 1) day = '0' + day

  const formatted = `${year}-${month}-${day}`
  return formatted
}

export const decodeDate = (date) => {
  const arr = date.split('-')
  return new Date(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2]))
}

export const checkWorkoutDates = (dates, date) => {
  return dates.some(day => decodeDate(day).getTime() === date.getTime())
}

export const dateIsPast = (date) => {
  const today = decodeDate(formatDate(new Date()))
  return today.getTime() > date.getTime()
}