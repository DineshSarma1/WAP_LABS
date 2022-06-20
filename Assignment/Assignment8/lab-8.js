/**
 * 
 */

console.log("lab-8");

var addModule = (function () {
    let counter = 0;
    
    const add = function() {
        counter = counter + 1;
        console.log(counter);
    };

    const reset = function() {
        counter = 0;
        console.log(counter);
    }

    return {
        add : add,
        reset : reset
    }
})();

addModule.add();
addModule.add();
addModule.add();
addModule.reset();

// 7)    The variable counter is a free variable. A free variable is a variable which is not declared or
//       passed as a parameter to a given function but is used inside it. 

//8
var make_adder = function (num){
    var counter = 0;
    return function () {
        counter = counter + num;
        return counter;
    };
}

var add5 = make_adder(5);
console.log(add5());
console.log(add5());
console.log(add5());

var add7 = make_adder(7);
console.log(add7());
console.log(add7());
console.log(add7());


//9) To make JS code containing its functions and variable names all in the global namespace, we can make 
//  use of module pattern which helps to define specific module for specific function. This will also avoid 
//  common problem with namespace/name collisions.

//10
var employee = (function() {
    let name = "";
    let age = 0;
    let salary = 000;

    const setName = function(name) {
        this.name = name;
    }

    const getName = function() {
        return this.name;
    }

    const setAge = function(age) {
        this.age = age;
    }

    const getAge = function() {
        return this.add;
    }

    const setSalary = function(salary) {
        this.salary = salary;
    }

    const getSalary = function() {
        return this.salary;
    }

    function increaseSalary(percentage) {
        this.salary = getSalary() + (getSalary() * percentage) / 100;
    }

    function incrementAge(){
        this.age = getAge() + 1;
    }

    return {
        setName : setName,
        setAge : setAge,
        setSalary : setSalary,
        increaseSalary : increaseSalary,
        incrementAge : incrementAge
    }

})();

//11

employee.address = (function() {
    let address = null;

    return {
        setAddress : function(address) {
            this.address = address;
        },
        getAddress : function() {
            return this.address;
        }
    }
})();


//12
var enployee2 = (function() {
    let name = "";
    let age = 0;
    let salary = 000;

    const setName = function(name) {
        this.name = name;
    }

    const getName = function() {
        return this.name;
    }

    const setAge = function(age) {
        this.age = age;
    }

    const getAge = function() {
        return this.add;
    }

    const setSalary = function(salary) {
        this.salary = salary;
    }

    const getSalary = function() {
        return this.salary;
    }

    function increaseSalary(percentage) {
        this.salary = getSalary() + (getSalary() * percentage) / 100;
    }

    function incrementAge(){
        this.age = getAge() + 1;
    }

    return {
        setName : setName,
        getName : getName,
        setAge : setAge,
        getAge : getAge,
        setSalary : setSalary,
        getSalary : getSalary,
        increaseSalary : increaseSalary,
        incrementAge : incrementAge
    }

})();
