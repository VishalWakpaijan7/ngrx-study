export interface Post {
    id: 1;
    title: string;
    author: string;
}

export interface PostStateInterface {
    isLoading:boolean,
    posts:Post[],
    error:string|null,
}