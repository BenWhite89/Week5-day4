import {modifyBlog} from '../config/db';

export function GetUsers(): Promise<Array<models.IUser>> {
    return modifyBlog('GetUsers', []);
}

export function GetUser(id: number):

export function CreateUser(firstName: string, lastName: string, email: string, password: number) {
    return modifyBlog('CreateUser', [firstName, lastName, email, password])
}