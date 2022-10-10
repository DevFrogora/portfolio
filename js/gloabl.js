import {Get } from "/portfolio/js/Utils/RestFullApiRequester.js"
// let path={
//     navigation : "js/template/navigation/navigation-element.js"
// }

class db {
    constructor(project,contact){
        this.project = project;
        this.contact = contact;
    }
}

let project= await Get("https://localhost:5001/project/",null);
let contact = await Get("https://localhost:5001/contact/", null);
window.db = new db(project,contact);
// window.contact = contact;
// console.log(window.db.project);

// console.log("hello");