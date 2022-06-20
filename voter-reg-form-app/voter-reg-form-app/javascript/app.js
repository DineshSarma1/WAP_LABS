/* 
    app.js
*/



window.onload = function() {

    var submit = document.getElementById("submit");

    submit.addEventListener("click", registerSubmit);
    
        function registerSubmit() {
            let registerObject = {
              voterId: document.getElementById("voterNo").value,
              firstName: document.getElementById("firstName").value,
              lastName: document.getElementById("lastName").value,
              levelOfStudy: document.getElementById("levelOfStudy").ariaSelected,
            };
          
            alert(JSON.stringify(registerObject));
            console.log(registerObject);
          } 
}