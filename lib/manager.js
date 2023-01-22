const Employee = require("./employee");

class Manager extends Employee{
    constructor(name,id,email,officeNum){
        super(name,id,email);
        this.officeNum = officeNum;
        this.role = "Manager";
        this.temp = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            ${this.name} 
            <small class="text-muted">${this.role}</small>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id:${this.id}</li>
            <li class="list-group-item">Email:${this.email}</li>
            <li class="list-group-item">Office:${this.officeNum}</li>
        </ul>
        </div>`;
    }
    getRole(){
        return(this.role);
    }
    
}
module.exports = Manager