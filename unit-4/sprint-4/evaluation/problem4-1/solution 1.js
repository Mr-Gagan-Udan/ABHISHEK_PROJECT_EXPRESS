

    //factory functionfor creating the emp object
    function Employee(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.displayName = function(){
        return this.name;
    }
    Employee.prototype.increaseAge = function(){
        this.age += 1;
        return this.age;
    }
    Employee.prototype.decreaseAge = function(){
        this.age -= 1;
        return this.age;
    }
    Employee.prototype.displaySalary = function(){
        return this.salary;
    }


    //factory function for creating the Manager object
    function Manager(name,age,salary,department){
        Employee.call(this,name,age,salary)
        this.department = department;
    }

    //inherts from Employee
    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;


    Manager.prototype.displayDepartment = function(){
        return this.department;
    }
    Manager.prototype.increaseSalary = function(employee,amount){
        employee.salary += amount;
        return employee.salary;
    }
    Manager.prototype.decreaseSalary = function(employee,amount){
        employee.salary -= amount;
        return employee.salary;
    }

//createing the employee obj
let emp = new Employee('abhi',30,3000);
//manager obj
let manager = new Manager('abhishek', 40, 222200,'sales');


//testing the emp
console.log(emp.displayName())
console.log(emp.increaseAge())
console.log(emp.decreaseAge())


//testing the manager
console.log(manager.displayName())
console.log(manager.displayDepartment())
console.log(manager.increaseSalary())

