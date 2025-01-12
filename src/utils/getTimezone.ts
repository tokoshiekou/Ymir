export const getTimezone = () => {
  const offsetInMinutes = new Date().getTimezoneOffset()
  const offsetInHours = -offsetInMinutes / 60
  return offsetInHours.toString()
}
