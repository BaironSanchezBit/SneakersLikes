export class Coment{
    _id?: number;
    name: string;
    coment: string;

    constructor(name: string ,coment: string){
        this.name = name;
        this.coment = coment;
    }
}