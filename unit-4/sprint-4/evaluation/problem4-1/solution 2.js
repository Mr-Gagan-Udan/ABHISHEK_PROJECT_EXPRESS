

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

async function empData(employeeid){
    try{
        const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees/${employeeid}`);
        if (!res.ok) throw new Error('network was not ok');
        const data = await res.json();
        return new Employee(data.name, data.age, data.salary);

    }catch(error){
        console.error('failed to fetch',error);
        return null;
    }
}

//ex

empData(1).then(employee =>{
    if(employee){
        console.log(employee.displayName())
        console.log(employee.increaseAge())
        console.log(employee.decreaseAge())

    }
});

