const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should give us the school the intern attends", () => {
      const intern = new Intern("Tigran", 333, "tk2167@yahoo.com", "UC");
      const school = intern.getSchool();
      expect(school).toEqual("UC");
    });
  });

  describe("getRole", () => {
    it("should tell us this employee is an intern", () => {
      const intern = new Intern("Matt Yeager", 222, "yeager@awwdude.gov", "UC");
      const role = intern.getRole();
      expect(role).toEqual("Intern");
    });
  });
});