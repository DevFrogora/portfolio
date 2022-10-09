export class Message {
    constructor(id = null, date = null, name = null, type=null, message=null , isread= false) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.type = type;
        this.message = message;
        this.isread = isread;
    }
}
