export class Message {
    constructor(id = null, username = null,email= null,date= null, type=null, message=null , isread= false) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.date = date;
        this.type = type;
        this.message = message;
        this.isread = isread;
    }
}
