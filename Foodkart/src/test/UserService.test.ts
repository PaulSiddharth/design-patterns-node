// test case for user service

import { UserService } from '../service/User.service';
import { User } from '../models/User';
import { UserDao } from '../dao/User.dao';

describe('UserService', () => {
    let userService: UserService;
    let userDao: UserDao;

    beforeEach(() => {
        userService = new UserService();
        userDao = UserDao.getInstance();
    });

    it('should register a user', async () => {
        const user = new User('John Doe', 'john.doe@gmail.com', 'MALE', '9876543210', '560001', 'Bangalore');
        const spy = jest.spyOn(userDao, 'addUser');
        await userService.registerUser(user.getName(), user.getEmail(), user.getGender(), user.getPhoneNumber(), user.getPincode(), user.getAddress());
        expect(spy).toHaveBeenCalledWith(user);
    });

    it('should login a user', async () => {
        const user = new User('John Doe', 'john.doe1@gmail.com', 'MALE', '9876543211', '560001', 'Bangalore');
        userDao.addUser(user);
        const spy = jest.spyOn(userDao, 'setCurrentLoginUser');
        const loggedInUser = await userService.loginUser(user.getEmail());
        expect(spy).toHaveBeenCalledWith(user);
        expect(loggedInUser?.email).toEqual(user.email);
    });
});

