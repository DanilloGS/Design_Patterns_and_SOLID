// Classe User é somente responsavel por armazenar dados do usuário

class User {

    private email: string = "";
    private phone: string = "";

    constructor(private name: string, private cpf: string){
        console.log("User created!");
    }

    getName(): string{
        return this.name;
    }

    getCpf(): string{
        return this.cpf;
    }

    setEmail(email:string) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setPhone(phone:string) {
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }
}

export default User;