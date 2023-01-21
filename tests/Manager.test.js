const Manager = require("../lib/manager.js");

describe("Manager", () =>{
    describe("getRole", () =>{
        it("should return Manager", () => {
        const role = "Manager"
        
        const result = new Manager().getRole();

        expect(result).toEqual(role);
    })
    })

})