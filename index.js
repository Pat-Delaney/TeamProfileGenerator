const Employee = require("./lib/employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/manager");
const fs = require("fs");
const inquirer = require("inquirer");

const {employeeQues,engineerQues,internQues,managerQues,headerTemp,footerTemp} = require("./src/template.js");

const [nameQ,idQ,emailQ] = employeeQues;
const [githubQ] = engineerQues;
const [schoolQ] = internQues;
const [officeNumQ] = managerQues;
let instArray = [];

function objgen(){

inquirer
.prompt([
    {
        type:"list",
        message:"Would you like to add an employee?",
        choices:["Yes","No"],
        name:"recur"
    },
    {
        type:"input",
        message: nameQ,
        name:"name",
        when: (answers) => answers.recur === "Yes"
    },
    {
        type:"input",
        message: idQ,
        name:"id",
        when: (answers) => answers.recur === "Yes"
    },
    {
        type:"input",
        message: emailQ,
        name:"email",
        when: (answers) => answers.recur === "Yes"
    },
    {
        type:"list",
        message:"What type of employee would you like to add?",
        choices:["Manager","Engineer","Intern","Unassigned Employee"],
        name:"employeeType",
        when: (answers) => answers.recur === "Yes"
    },
    {
        type:"input",
        message: githubQ,
        name:"github",
        when: (answers) => answers.employeeType === "Engineer" && answers.recur === "Yes"
    },
    {
        type:"input",
        message: schoolQ,
        name:"school",
        when: (answers) => answers.employeeType === "Intern" && answers.recur === "Yes"

    },
    {
        type:"input",
        message: officeNumQ,
        name:"officeNum",
        when: (answers) => answers.employeeType === "Manager" && answers.recur === "Yes"
    }  
])
.then((response)=>{
    console.log(response);
    switch(response.recur){
        case "No":
            genFile(instArray);
        break;
        case "Yes":
        switch(response.employeeType){
            case "Manager":
            instArray.push(new Manager(response.name,response.id,response.email,response.officeNum));
            objgen();
            break;
            case "Engineer":
            instArray.push(new Engineer(response.name,response.id,response.email,response.github));
            objgen();
            break;
            case "Intern":
            instArray.push(new Intern(response.name,response.id,response.email,response.school));
            objgen();
            break;
            case "Unassigned Employee":
            instArray.push(new Employee(response.name,response.id,response.email));
            objgen();
            break;
        };
        break;
    }
        
})};

function genFile(instArray){
    console.log(instArray);
    fs.writeFile("./output/index.html",headerTemp,(err)=>
    err ? console.log(err):console.log("Html file being Generated..."));
    instArray.forEach(employee => {
        switch(employee.role){
            case("Manager"):
            fs.appendFile("./output/index.html",employee.temp,(err)=>
            err ? console.log(err):console.log("Manager Added..."));
            break;
            case("Engineer"):
            fs.appendFile("./output/index.html",employee.temp,(err)=>
            err ? console.log(err):console.log("Engineer Added..."));
            break;
            case("Intern"):
            fs.appendFile("./output/index.html",employee.temp,(err)=>
            err ? console.log(err):console.log("Intern Added..."));
            break;
            case("Employee"):
            fs.appendFile("./output/index.html",employee.temp,(err)=>
            err ? console.log(err):console.log("Employee Added..."));
            break;
        }
    });
    fs.appendFile("./output/index.html",footerTemp,(err)=>
    err ? console.log(err):console.log("Html file generated!"));
}
objgen();