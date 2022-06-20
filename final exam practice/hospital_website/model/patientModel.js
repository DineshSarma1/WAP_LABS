// patientModel.js

function Patient(patientId, firstName, middleName, lastName, dob, department, outPatient) {
    this.patientId = patientId;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.dob = dob;
    this.department = department;
    this.outPatient = outPatient;
}

module.exports = Patient;