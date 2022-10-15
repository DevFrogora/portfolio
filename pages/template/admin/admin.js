import { PostWithAuth, Get } from "/portfolio/js/Utils/RestFullApiRequester.js"
import { Project } from "/portfolio/pages/template/Project/Models/ProjectModel.js";

export function Admin() {
    login();
}

function login() {

    let loginbtn = document.querySelector(".admin_container .login_page form button")
    loginbtn.addEventListener("click", async () => {
        let username = document.querySelector(".admin_container .login_page form input[name=\"username\"] ").value;
        let password = document.querySelector(".admin_container .login_page form input[name=\"password\"] ").value;
        //  alert(username + " "+ password);
        let response = await PostWithAuth(window.urllist.webapiDomain + "/admin", username, password, "");
        if (response == 200) {
            alert(response.status);
        } else {
            adminMain();
        }
    })
}
const routes = {
    "/adminMain": "/portfolio/pages/template/admin/adminMain.html",
    "/addproject": "/portfolio/pages/template/admin/project/addproject.html"
};
async function adminMain() {
    const html = await fetch(routes["/adminMain"]).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    await loadProjectPage();
}

async function loadProjectPage() {
    let addProjecthtml = await fetch(routes["/addproject"]).then((data) => data.text());
    let template = document.createElement('template');
    template.innerHTML = addProjecthtml;
    const cloneTemplate = template.content.cloneNode(true);
    // console.log(cloneTemplate);
    let button = cloneTemplate.querySelector(".projectpanel .projectTemp .fifth .submit");
    console.log(button);
    button.addEventListener("click", (event) => {
        AddProject(event.target.parentNode.parentNode);
    });
    document.querySelector(".admin_container .content").appendChild(cloneTemplate);


}

function AddProject(template) {
    let primaryid = template.querySelector(".projectpanel .projectTemp .first input[name=\"pid\"] ").value;
    let name = template.querySelector(".projectpanel .projectTemp .first input[name=\"name\"] ").value;
    let applicationType = template.querySelector(".projectpanel .projectTemp .first input[name=\"applicationType\"] ").value;
    let languages = template.querySelector(".projectpanel .projectTemp .second input[name=\"languages\"] ").value;
    let summary = template.querySelector(".projectpanel .projectTemp .third input[name=\"summary\"] ").value;
    let sourceLink = template.querySelector(".projectpanel .projectTemp .fourth input[name=\"sourceLink\"] ").value;
    let previewLink = template.querySelector(".projectpanel .projectTemp .fourth input[name=\"previewLink\"] ").value;
    let contributedBy = template.querySelector(".projectpanel .projectTemp .fourth input[name=\"contributedBy\"] ").value;
    let date = template.querySelector(".projectpanel .projectTemp .fourth input[name=\"date\"] ").value;

    let summaryArray = [];
    if (summary != '') {
        summaryArray = summary.split(",");
    } else {
        console.log("null")
        summaryArray = null;
    }

    let contributedByArray = [];
    if (contributedBy != '') {
        contributedByArray = contributedBy.split(",");
    } else {
        console.log("null")
        contributedByArray = null;
    }

    let p = new Project(primaryid, date, name, languages, applicationType, sourceLink, previewLink, contributedByArray, summaryArray);
    console.log(p);
}


