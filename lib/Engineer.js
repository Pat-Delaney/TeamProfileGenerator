const Employee = require("./employee");

class Engineer extends Employee{
    constructor(github){
        this.github = github;
        this.role = "Engineer";
    }
    getGithub(){
        return(this.github);
    }
    getRole(){
        return(this.role);
    }
}