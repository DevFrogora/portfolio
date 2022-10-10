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
let webapi_domain="https://portfoliowebapi.azurewebsites.net"
let project= await Get(webapi_domain+"/project/",null);
let contact = await Get(webapi_domain+"/contact/", null);
window.db = new db(project,contact);
// window.contact = contact;
// console.log(window.db.project);

// console.log("hello");