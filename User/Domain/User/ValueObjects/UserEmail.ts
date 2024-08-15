export class UserEmail {
    value: string;

    constructor(value: string){
        this.value = value;
        this.emailIsValid();
    }

    private emailIsValid(){
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if(!regexp){
            throw new Error("UserEmail is not a valid email");
        }
    }
}