import {Component, OnInit} from 'angular2/core';

import {POSTS} from '../../mock-posts';
import {Post} from '../../models/post';
import {PostsService} from '../../services/posts';

@Component({
    providers: [
        PostsService
    ],
    selector: 'bootstrap-posts',
    templateUrl: 'app/templates/bootstrap/pages/posts.html'
})

export class PostsComponent implements OnInit {
    posts: Post[];

    constructor (private _postsService: PostsService) {}

    getPosts() {
        this._postsService.getPosts().then(posts => this.posts = posts);
    }

    ngOnInit() {
        this.getPosts();
    }
}
