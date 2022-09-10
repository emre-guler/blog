const request = require("supertest");
const userService = require("../services/userService");
const UserServiceInstance = new userService();
describe("Users", () => {
  test("Get all users", () => {
    UserServiceInstance.getUsers();
    // expect(users).toEqual({
    //   success: true,
    //   data: users,
    // });
  });
  //   it("GET/users/id -->returns specific user by ID", () => {});
  //   it("POST/users -->create user", () => {});
  //   it("PATCH/users -->update user", () => {});
  //   it("DELETE/users -->delete user", () => {});
});
