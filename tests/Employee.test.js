const Employee = require("../lib/employee.js");

describe("Employee", () =>{
    describe("getName", () =>{
        it("should return the appropriate name var", () =>{
            const name = "Bob";
            const result = new Employee("Bob","","").getName();

            expect(result).toEqual(name);
        })
    })
    describe("getId", () =>{
        it("should return the appropriate Id var", () =>{
            const id = "1";
            const result = new Employee("Bob","1","").getId();

            expect(result).toEqual(id);
        })
    })
    describe("getEmail", () =>{
        it("should return the appropriate email var", () =>{
            const email = "Email@email.com";
            const result = new Employee("Bob","1","Email@email.com").getEmail();

            expect(result).toEqual(email);
        })
    })
    describe("getRole", () =>{
        it("should return Employee", () => {
        const role = "Employee"
        
        const result = new Employee().getRole();

        expect(result).toEqual(role);
    })
    })

})