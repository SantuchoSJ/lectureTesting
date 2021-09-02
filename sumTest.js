function sum(a, b){
    return a + b
}

const chai = require("chai")
const expect = chai.expect

describe("Add function", function(){
    it("should be a function", function(){
        expect(sum).to.be.a("function")
    })
    it("should add numbers", function(){
        expect(sum(5, 5)).to.equal(10)
    })


    it("should be equal", function(){
        expect({name:"pepe"}).to.eql({name:"pepe"})
    })
})