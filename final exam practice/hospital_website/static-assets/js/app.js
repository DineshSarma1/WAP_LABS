// app.js

 //"use strict"
 
// console.log("testing java script");

// window.onload = function() {
//     const patientForm = document.getElementById("patientsRegistrationForm");

//     let tableMarkup = `<table class="table table-hover">
//     <thead>
//         <tr class="table-secondary"><th scope="col">Patient ID No</th>
//             <th scope="col">First Name</th>
//             <th scope="col">Middle Initial(s)</th>
//             <th scope="col">Last Name</th>
//             <th scope="col">Date of birth</th>
//             <th scope="col">Department</th>
//             <th scope="col">Out-patient?</th>
//         </tr>
//     </thead>`
    
//     //let patientTable = document.getElementById("table");

//     patientForm.addEventListener("submit", event => {
//         event.preventDefault();
//         const patientId = document.getElementById("patientIdNo");
//         const firstName = document.getElementById("firstName");
//         const middleName = document.getElementById("middleName");
//         const lastName = document.getElementById("lastName");
//         const dob = document.getElementById("dob");
//         const department = document.getElementById("department");
//         const outPatient = patientForm.elements["outPatient"];

//         const formData = `
//         Patient ID : ${patientId.value}
//         Full Name : ${firstName.value} ${middleName.value} ${lastName.value}
//         Date of birth : ${dob.value}
//         Department : ${department.value}
//         Is this Out-Patient : ${outPatient.value}
//         `;

//         tableMarkup = tableMarkup.replace("</table>","");

//         tableMarkup = tableMarkup + `
//             <tr>
//                 <td>${patientId.value}</td>
//                 <td>${firstName.value}</td>
//                 <td>${middleName.value}</td>
//                 <td>${lastName.value}</td>
//                 <td>${dob.value}</td>
//                 <td>${department.value}</td>
//                 <td>${outPatient.value}</td>
//             </tr>`
//         tableMarkup = tableMarkup + '</table>'

//         document.getElementById("populateTable").innerHTML = tableMarkup;

//         //alert(formData);

//     })

// }