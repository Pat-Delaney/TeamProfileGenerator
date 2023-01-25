const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
        this.role = "Engineer";
        this.temp = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        <i class="fas fa-user-hard-hat"></i>
            ${this.name} 
        <small class="text-muted">${this.role}</small>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id:${this.id}</li>
            <li class="list-group-item">Email:${this.email}</li>
            <li class="list-group-item">Github:${this.github}</li>
        </ul>
        </div>`
    }
    getGithub(){
        return(this.github);
    }
    getRole(){
        return(this.role);
    }
}
module.exports = Engineer;