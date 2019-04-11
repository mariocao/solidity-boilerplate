const HelloWorld = artifacts.require("HelloWorld")

contract("helloWorld", accounts => {
  describe("salutations", () => {
    let helloWorld
    before(async () => {
      helloWorld = await HelloWorld.deployed()
    })

    it("should say hi (async)", async () => {
      assert.equal(await helloWorld.sayHello(), "hello world")
    })

    it("should say hi (then)", () => {
      HelloWorld.deployed()
        .then(instance => instance.sayHello())
        .then(salute => {
          assert.equal(salute, "hello world")
        })
    })
  })
})
