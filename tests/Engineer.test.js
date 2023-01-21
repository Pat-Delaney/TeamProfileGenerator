const Engineer = require("../lib/Engineer.js");

describe("Engineer", () =>{
    describe("getGithub", () =>{
        it("should return the appropriate github var", () =>{
            const github = "www.mygithub.com"
            const result = new Engineer("","","","www.mygithub.com").getGithub();

            expect(result).toEqual(github);
        })
    })
    describe("getRole", () =>{
        it("should return Engineer", () => {
        const role = "Engineer"
        
        const result = new Engineer().getRole();

        expect(result).toEqual(role);
    })
    })

})