class Employee {
    name;
    taskList;
    constructor(name, taskList) {
        this.name = name;
        this.taskList = taskList;
    }

    displayInfo()
}

class Developer extends Employee {
    constructor(name, taskList) {
    super(name, taskList)}
}

class Test extends Employee {
    constructor(name, taskList) {
        super(name, taskList)}    
}

class Manager extends Employee {
    supervisees;
    constructor(supervisees, name, taskList) {
        super(name, taskList);
        this.supervisees = supervisees
    }

    addEmployee(e) {
        if (e instanceof Employee) {
            this.supervisees.push(e);
        }      
    }
}
