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
let localHost = "https://localhost:5001";
let azureHost = "https://portfoliowebapi.azurewebsites.net";
let webapi_domain=localHost;  //
window.urllist = new urldb(webapi_domain);

let project= await Get(window.urllist.webapiDomain+"/project/",null);
let contact = await Get(window.urllist.webapiDomain+"/contact/", null);
let resume = await Get(window.urllist.webapiDomain+"/resume/", null);
window.db = new db(project,contact,resume);

// window.contact = contact;
// console.log(window.db.project);

// console.log("hello");