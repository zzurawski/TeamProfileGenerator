const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return the name of the employee", () => {
      const employee = new Employee("Joe", 999, "jm91900@gmail.com");
      const name = employee.getName();
      expect(name).toEqual("Joe");
    });
  });

  describe("getID", () => {
    it("should return the id of the employee", () => {
        const employee = new Employee("Sean McDonnell", 212, "seanmcdonnell@fbi.org");
        const id = employee.getID();
        expect(id).toEqual(212);
    })
  })
  describe("getEmail", () => {
    it("should return the email address of our employee", () => {
      const employee = new Employee("Sean McDonnell", 212, "seanmcdonnell@fbi.org");
      const email = employee.getEmail();
      expect(email).toEqual("seanmcdonnell@fbi.org");
    });
  });

  describe("getRole", () => {
    it("should return the role of employee", () => {
      const employee = new Employee("Joe", 999, "jm91900@gmail.com");
      const role = employee.getRole();
      expect(role).toEqual("Employee");
    });
  });
});