export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostFactory = (args?: Partial<Post>): Post => ({
  id: 0,
  userId: 0,
  title: "",
  body: "",
  ...args,
});
