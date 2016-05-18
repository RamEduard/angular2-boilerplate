import {Injectable} from 'angular2/core';

import {POSTS} from '../mock-posts';
import {Post} from '../models/post';

@Injectable()

export class PostsService {

    getPosts () {
        return Promise.resolve(POSTS);
    }
    getPost(id: number) {
        return Promise.resolve(POSTS).then(
                posts => posts.filter(post => post.id === id)[0]
        );
    }
}