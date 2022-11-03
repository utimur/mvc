import {delay} from "../../helpers";

export interface User {
    id: string;
    username: string;
    age: number;
    createdAt: string;
}

export type SortOrder = 'asc' | 'desc';
export type SortField = 'age' | 'username';

export class UsersModel {
    users: User[];
    searchValue: string;
    sortOrder: SortOrder;
    sortField: SortField;

    constructor() {
        this.users = [];
        this.searchValue = '';
        this.sortOrder = 'asc';
        this.sortField = 'username';
    }

    async fetchUsers(): Promise<User[]> {
        try {

            return this.users;
        } catch (e) {
            this.users = [];
            return [];
        }
    }

    createUser(username: string, age: number) {
        if(this.users.find(user => user.username === username)) {
            throw Error('Пользователь уже существует')
        }

        const newUser: User = {
            id: String(Math.random()),
            username,
            age,
            createdAt: Date.now().toString(),
        }

        this.users.push(newUser)
        return newUser;
    }

    sortUsers(field: SortField, order: SortOrder) {
        const sortedUsers = [...this.users.sort((a, b) => {
            if(order === "asc") {
                return a[field] > b[field] ? 1 : -1;
            }
            return a[field] < b[field] ? 1 : -1;
        })]

        this.users = sortedUsers;

        return sortedUsers;
    }
}
