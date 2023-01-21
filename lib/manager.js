const Employee = require("./employee");

class Manager extends Employee{
    constructor(officeNum){
        this.officeNum = officeNum;
        this.role = "Manager"
    }
    getRole(){
        return(this.role);
    }
}