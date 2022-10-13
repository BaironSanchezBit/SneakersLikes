export class Usuario{
    _id?: number;
    fullName: string;
    username: string;
    password: string;
    email: string;

    constructor(fullName: string ,username: string, password: string, email: string){
        this.fullName = fullName;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}