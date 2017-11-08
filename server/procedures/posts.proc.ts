import {modifyBlog} from '../config/db';

export function GetPosts() {
    return modifyBlog('GetPosts', []);
}

export function CreatePost(userId: number, categoryId: number, title: string, content: string) {
    return modifyBlog('CreatePost', [userId, categoryId, title, content]);
}

export function GetPost(id: number) {
    return modifyBlog('GetPost', [id]);
}

export function UpdatePost(id: number, categoryId: number, title: string, content: string) {
    return modifyBlog('UpdatePost', [id, categoryId, title, content]);
}

export function DeletePost(id: number) {
    return modifyBlog('DeletePost', [id]);
}