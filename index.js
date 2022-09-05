// Your code here
function createEmployeeRecord(record) {
    return {
        firstName: record[0],
        familyName: record[1],
        title:record[2],
        payPerHour:record[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}
const createEmployeeRecords = function(firstRow) {
    return firstRow.map(function(secondRow){
        return createEmployeeRecord(secondRow)
    })
  }
  let createTimeInEvent = function(employee, day){
    let [date, hour] = day.split(' ')
  
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
  
    return employee
  }
  
  function createTimeOutEvent(employee, day){
    let [date, hour] = day.split(' ')
  
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
  
    return employee
  }
  
  function hoursWorkedOnDate(employee, payDate){
   
    
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === payDate
    })
  
    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === payDate
    })
  
    return (outEvent.hour - inEvent.hour) / 100
  }
  function findEmployeeByFirstName (srcArray, firstName) {
   
    return srcArray.find(function(records){
      return records.firstName === firstName
    })
    }
    
    function calculatePayroll(arrayOfEmployeeRecords){
      return arrayOfEmployeeRecords.reduce(function(memo, records){
          return memo + allWagesFor(records)
      }, 0)
    }
  
  function wagesEarnedOnDate(employee, payDate)
  {
    let rawWage = hoursWorkedOnDate(employee, payDate) *employee.payPerHour
    return parseFloat(rawWage.toString())
  }
  
  function allWagesFor(employee)
  {
   const eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })
  
    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 
    0)
  
    return payable
  }