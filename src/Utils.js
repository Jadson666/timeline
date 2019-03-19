const monthMappingArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const getToday = () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth()
  let yyyy = today.getFullYear()

  if (dd < 10) {
    dd = '0' + dd
  }
  return {
    day: dd,
    month: monthMappingArray[mm],
    year: yyyy
  }
}

export const getCountDay = () => {
  let oneDay = 24 * 60 * 60 * 1000 
  let firstDate = new Date(2006, 1, 1)
  let secondDate = new Date()

  let diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  )
  return diffDays
}
