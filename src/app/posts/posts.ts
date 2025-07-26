import { Component, OnInit } from '@angular/core';
import type { Ipost } from '../server/models/models';
import { PostService } from '../services/post';
import { UserService } from '../services/user';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  showform: boolean = false;
  comment: string = '';

  posts: Ipost[] = [];

  newpost: Ipost = {
    date: new Date(),
    title: '',
    body: '',
    userid: '',
    imgurl: 'https://picsum.photos/200/300',
    like: false,
    likes: 0,
    comments: [],
  };

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.refreshPosts();
  }

  toggleForm() {
    this.showform = !this.showform;
  }

  toggleCommentSection(post: Ipost) {
    post.showComments = !post.showComments;
  }

  refreshPosts(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  resetForm(): void {
    this.newpost = {
      title: '',
      body: '',
      date: new Date(),
      imgurl: 'https://picsum.photos/200/300',
      like: false,
      likes: 0,
      comments: [],
    };
    this.showform = false;
  }

  addPost(): void {
    const postToAdd = {
      ...this.newpost,
      date: new Date(),
    };

    delete (postToAdd as any).userid;

    this.postService.addPost(postToAdd).subscribe(() => {
      this.refreshPosts();
      this.resetForm();
    });
  }

  removePost(id: string): void {
    this.postService.deletePost(id).subscribe(() => {
      this.refreshPosts();
    });
  }

  likeCounter(post: Ipost): void {
    post.like = !post.like;
    post.likes = post.like ? post.likes + 1 : post.likes - 1;
    this.postService.updatePost(post).subscribe();
  }

  addComment(post: Ipost): void {
    const text = post.newComment?.trim();
    if (text) {
      post.comments.push(text);
      post.newComment = '';
      this.postService.updatePost(post).subscribe();
    }
  }

  usernameMap: { [userId: string]: string } = {};

  getUsernameById(userid: string): string {
    if (this.usernameMap[userid]) return this.usernameMap[userid];

    this.userService.getUserById(userid).subscribe({
      next: (user) => {
        this.usernameMap[userid] = user.username;
      },
      error: () => {
        this.usernameMap[userid] = 'Unknown';
      },
    });

    return 'Loading...'; // Temporary placeholder while async request completes
  }

  userImgMap: { [userId: string]: string } = {};

  getUserImg(userid: string): string {
    if (this.userImgMap[userid]) return this.userImgMap[userid];

    this.userService.getUserById(userid).subscribe({
      next: (user) => {
        this.userImgMap[userid] = user.imgurl;
      },
      error: () => {
        this.userImgMap[userid] = 'https://via.placeholder.com/40';
      },
    });

    return 'https://via.placeholder.com/40'; // temporary image while loading
  }
}
