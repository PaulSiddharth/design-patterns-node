"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_dao_1 = require("../dao/User.dao");
const User_1 = require("../models/User");
class UserService {
    constructor() {
        this.userDao = User_dao_1.UserDao.getInstance();
    }
    registerUser(name, email, gender, phoneNumber, pincode, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.User(name, email, gender, phoneNumber, pincode, address);
            this.userDao.addUser(user);
            // Code to register user
        });
    }
    loginUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.userDao.getUser(email);
            if (!user) {
                return null;
            }
            this.userDao.setCurrentLoginUser(user);
            return user;
        });
    }
}
exports.UserService = UserService;
