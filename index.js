// Your code here
// 1
function createEmployeeRecord(array){
    let employeeRecord = Object.assign({}, {firstName: array[0], familyName: array[1], title: array[2], payPerHour:array[3], timeInEvents:[], timeOutEvents:[]});
    return (employeeRecord);
};
//createEmployeeRecord();


//2
function createEmployeeRecords(array_of_arrays){
    let emp_array_of_objects = [];

    array_of_arrays.forEach(array => {
        let emp_obj = createEmployeeRecord(array);
        emp_array_of_objects.push(emp_obj);
    });

    return emp_array_of_objects;
    //console.log(emp_array_of_objects);
};
//createEmployeeRecords();


//3
function createTimeInEvent(employeeRecord, dateStamp){
    let newRecord = employeeRecord;
    newRecord.timeInEvents = [Object.assign({}, {type: "TimeIn", hour:parseInt(dateStamp.slice(11), 10), date:dateStamp.slice(0, 10)})];

    return (newRecord);
    //console.log(record);
};
//createTimeInEvent();

//
function createTimeOutEvent(employeeRecord, dateStamp){
    let newRecord = employeeRecord;
    newRecord.timeOutEvents = [Object.assign({}, {type: "TimeOut", hour:parseInt(dateStamp.slice(11), 10), date:dateStamp.slice(0, 10)})];

    return (newRecord);
};
//createTimeOutEvent();

//

function hoursWorkedOnDate(employeeRecord, date){
    let hoursWorked;
    let time_in;
    let time_out;

    hoursWorked = (time_out - time_in)/100;

    return (hoursWorked);
    //console.log(hoursWorked);
};
//hoursWorkedOnDate();

//
function wagesEarnedOnDate(employeeRecordObj, date){

};
//wagesEarnedOnDate();

//
function allWagesFor(employeeRecordObj){

};
//allWagesFor();

//
function calculatePayroll(employeeRecordsArray){

};
//calculatePayroll();