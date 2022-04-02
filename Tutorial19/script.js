console.log('Date and Time in Javascript')

let today = new Date()
//console.log(today)

let otherDate = new Date('June 18, 2019')
otherDate = new Date('10/18/2019 12:00:00')

a = otherDate.getDay()
a = otherDate.getDate()
a = otherDate.getFullYear()
a = otherDate.getMonth()
a = otherDate.getHours()
a = otherDate.getMinutes()
a = otherDate.getSeconds()
a = otherDate.getMilliseconds()
a = otherDate.getTime()

console.log(a)