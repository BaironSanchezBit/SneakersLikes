export class Usuario{
    _id?: number;
    name: string;
    password: string;
    email: string;

    constructor(name: string, password: string, email: string, fec_crea: string){
        this.name = name;
        this.password = password;
        this.email = email;
    }
}