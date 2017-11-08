import {modifyBlog} from '../config/db';

export function GetCategories() {
    return modifyBlog('GetCategories', []);
}

export function CreateCategory(name: string) {
    return modifyBlog('CreateCategory', [name]);
}