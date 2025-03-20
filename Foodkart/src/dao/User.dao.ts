import { User } from "../models/User";

export class UserDao {
    private static instance: UserDao;
    private users = new Map<string, User>();
    private currentLoginUser: User | null = null;


    private constructor() {}

    static getInstance(): UserDao {
        if (!UserDao.instance) {
            UserDao.instance = new UserDao();
        }
        return UserDao.instance;
    }

    addUser(user: User): void {
        console.log("Adding user", user.getEmail());
        // check if user already exists
        if (this.users.has(user.getEmail())) {
            throw new Error("User already exists");
        }
        this.users.set(user.getEmail(), user);
    }

    getUser(email: string): User | undefined {
        return this.users.get(email);
    }

    setCurrentLoginUser(user: User): void {
        this.currentLoginUser = user;
    }

    getCurrentLoginUser(): User | null {
        return this.currentLoginUser;
    }

}