export class Post{
    _id?: number;
    titleArticle: string;
    post: string;
    img: string;

    constructor(titleArticle: string ,post: string, img: string){
        this.titleArticle = titleArticle;
        this.post = post;
        this.img = img;
    }
}