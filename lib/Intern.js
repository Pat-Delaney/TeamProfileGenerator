const Employee = require("./employee");

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
        this.role = "Intern";
       this.temp = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        <i class="fas fa-user-graduate"></i>
            ${this.name} 
            <small class="text-muted">${this.role}</small>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id:${this.id}</li>
            <li class="list-group-item">Email:${this.email}</li>
            <li class="list-group-item">School:${this.school}</li>
        </ul>
        </div>`;
    }
    getSchool(){
        return(this.school);
    }
    getRole(){
        return(this.role);
    }
}
module.exports = Intern;