import { UserDao } from "../dao/User.dao";
import { User } from "../models/User";

export class UserService {

    userDao: UserDao;

    constructor() {
        this.userDao = UserDao.getInstance();
    }
    async registerUser(name: string, email: string, gender: string, phoneNumber: string, pincode: string, address: string): Promise<void> {
        const user = new User(name,
            email,
            gender,
            phoneNumber,
            pincode,
            address);
        this.userDao.addUser(user);
        // Code to register user

    }

    async loginUser(email: string): Promise<User | null> {
        const user = this.userDao.getUser(email);
        if (!user) {
            return null;
        }
        this.userDao.setCurrentLoginUser(user);
        return user;
    }
}