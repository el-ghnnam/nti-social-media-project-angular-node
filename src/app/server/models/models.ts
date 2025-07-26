export interface Ipost {
  _id?: string;
  title: string;
  body: string;
  userid?: string;
  date: Date;
  imgurl: string;
  like: boolean;
  likes: number;
  comments: string[];
  newComment?: string;
  showComments?: boolean;
}

export interface Iuser {
  _id?: string;
  name: string;
  username: string;
  email: string;
  imgurl: string;
  password?: string;
  date?: string;
}
