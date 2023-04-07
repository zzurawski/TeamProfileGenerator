const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the github connected to the specific engineer", () => {
      const engineer = new Engineer("Lorance", 123, "joemangan@pbs.org", "BigJoe");
      const github = engineer.getGithub();
      expect(github).toEqual("BigJoe");
    });
  });

  describe("getRole", () => {
    it("should show that this person is an engineer", () => {
      const engineer = new Engineer("Joe Fall", 001, "bigjoefall@yahoo.com");
      const role = engineer.getRole();
      expect(role).toEqual("Engineer");
    });
  });
});