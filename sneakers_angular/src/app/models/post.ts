export class Post{
    _id?: number;
    titleArticle: string;
    post: string;
    img: string;
    banner: string;
    img2: string;

    constructor(titleArticle: string ,post: string, img: string, banner: string, img2: string){
        this.titleArticle = titleArticle;
        this.post = post;
        this.img = img;
        this.banner =  banner;
        this.img2 = img2;
    }
}