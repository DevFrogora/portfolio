export class Message {
    constructor(id = null, date = null, username = null, type=null, message=null , isread= false) {
        this.id = id;
        this.username = username;
        this.date = date;
        this.type = type;
        this.message = message;
        this.isread = isread;
    }
}
