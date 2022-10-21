export class Post{
    _id?: number;
    tittleArticle: string;
    post: string;
    img: string;

    constructor(tittleArticle: string ,post: string, img: string){
        this.tittleArticle = tittleArticle;
        this.post = post;
        this.img = img;
    }
}