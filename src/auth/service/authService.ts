import { User } from '../model/user';

const users: User[] = [];

export const loginUser = (username: string, password: string): User | null => {
    const user = users.find(u => u.username === username && u.password === password);
    return user || null;
};

export const signupUser = (username: string, password: string): User | null => {
    const newUser: User = { id: users.length + 1, username, password };
    users.push(newUser);
    return newUser;
};
