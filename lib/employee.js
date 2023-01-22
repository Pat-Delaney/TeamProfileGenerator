class Employee {
    constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;
    !this.role ? this.role = "Employee" : "";
    this.temp  = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${this.name} 
        <small class="text-muted">${this.role}</small>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Id:${this.id}</li>
        <li class="list-group-item">Email:${this.email}</li>
        </ul>
        </div>`
    }
    getName(){
        return(this.name);
    }
    getId(){
        return(this.id);
    }
    getEmail(){
        return(this.email);
    }
    getRole(){
        return(this.role)
    }
}

module.exports = Employee