import { UserService } from "./service/User.service";

function main() {
    
    const userService = new UserService();

    // Register a user
    userService.registerUser("John Doe", "john.doe@gmail.com", "Male", "9876543210", "560001", "Bangalore");
}