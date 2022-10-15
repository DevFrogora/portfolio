import {Get } from "/portfolio/js/Utils/RestFullApiRequester.js"
// let path={
//     navigation : "js/template/navigation/navigation-element.js"
// }

class db {
    constructor(project,contact,resume){
        this.project = project;
        this.contact = contact;
        this.resume = resume;
    }
}

class urldb {
    constructor(webapiDomain){
        this.webapiDomain = webapiDomain;
    }
}
let debugLocalhost = "http://localhost:5187";
let localHost = "https://localhost:5001";
let azureHost = "https://portfoliowebapi.azurewebsites.net";
let webapi_domain=debugLocalhost;  //
window.urllist = new urldb(webapi_domain);

let resume = await Get(window.urllist.webapiDomain+"/resume/", null);
let project= await Get(window.urllist.webapiDomain+"/project/",null);
let contact = await Get(window.urllist.webapiDomain+"/contact/", null);
window.db = new db(project,contact,resume);

// window.contact = contact;
// console.log(window.db.project);

// console.log("hello");
console.log(window.db.project);