const Intern = require("../lib/intern.js");

describe("Intern", () =>{
    describe("getSchool", () =>{
        it("should return the appropriate school var", () =>{
            const school = "Computer school"
            const result = new Intern("","","","Computer school").getSchool();

            expect(result).toEqual(school);
        })
    })
    describe("getRole", () =>{
        it("should return Intern", () => {
        const role = "Intern"
        
        const result = new Intern().getRole();

        expect(result).toEqual(role);
    })
    })

})