"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDao = void 0;
class UserDao {
    constructor() {
        this.users = new Map();
        this.currentLoginUser = null;
    }
    static getInstance() {
        if (!UserDao.instance) {
            UserDao.instance = new UserDao();
        }
        return UserDao.instance;
    }
    addUser(user) {
        console.log("Adding user", user.getEmail());
        // check if user already exists
        if (this.users.has(user.getEmail())) {
            throw new Error("User already exists");
        }
        this.users.set(user.getEmail(), user);
    }
    getUser(email) {
        return this.users.get(email);
    }
    setCurrentLoginUser(user) {
        this.currentLoginUser = user;
    }
    getCurrentLoginUser() {
        return this.currentLoginUser;
    }
}
exports.UserDao = UserDao;
