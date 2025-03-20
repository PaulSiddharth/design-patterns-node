"use strict";
// test case for user service
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
const User_service_1 = require("../service/User.service");
const User_1 = require("../models/User");
const User_dao_1 = require("../dao/User.dao");
describe('UserService', () => {
    let userService;
    let userDao;
    beforeEach(() => {
        userService = new User_service_1.UserService();
        userDao = User_dao_1.UserDao.getInstance();
    });
    it('should register a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const user = new User_1.User('John Doe', 'john.doe@gmail.com', 'MALE', '9876543210', '560001', 'Bangalore');
        const spy = jest.spyOn(userDao, 'addUser');
        yield userService.registerUser(user.getName(), user.getEmail(), user.getGender(), user.getPhoneNumber(), user.getPincode(), user.getAddress());
        expect(spy).toHaveBeenCalledWith(user);
    }));
});
