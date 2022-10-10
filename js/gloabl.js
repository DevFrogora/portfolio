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

class urldb {
    constructor(webapiDomain){
        this.webapiDomain = webapiDomain;
    }
}
let webapi_domain="https://portfoliowebapi.azurewebsites.net"
window.urllist = new urldb(webapi_domain);

let project= await Get(window.urllist.webapiDomain+"/project/",null);
let contact = await Get(window.urllist.webapiDomain+"/contact/", null);
window.db = new db(project,contact);
// window.contact = contact;
// console.log(window.db.project);

// console.log("hello");