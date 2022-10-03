export class Usuario{
    _id?: number;
    nombreFull: string;
    username: string;
    password: string;
    email: string;

    constructor(nombreFull: string ,username: string, password: string, email: string){
        this.nombreFull = nombreFull;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}