const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getOffice", () => {
    it("should return the office number of the manager", () => {
      const manager = new Manager("Joe Fall", 111, "jahsehfall@yahoo.com", 222);
      const office = manager.getOffice();
      expect(office).toEqual(222);
    });
  });

  describe("getRole", () => {
    it("should return the manager role for this employee", () => {
      const manager = new Manager("Matt Yeager", 123, "yeagerbomb@gmail.com", 222);
      const role = manager.getRole();
      expect(role).toEqual("Manager");
    });
  });
});