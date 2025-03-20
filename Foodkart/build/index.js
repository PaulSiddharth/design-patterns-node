"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_service_1 = require("./service/User.service");
function main() {
    const userService = new User_service_1.UserService();
    // Register a user
    userService.registerUser("John Doe", "john.doe@gmail.com", "Male", "9876543210", "560001", "Bangalore");
}
