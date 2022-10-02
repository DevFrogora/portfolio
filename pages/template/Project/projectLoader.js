import { LoadFileToText } from "/portfolio/js/Utils/Loader.js";
import {loadJS} from "/portfolio/js/Utils/ScriptLoader.js";

let sidebarLi = document.querySelectorAll(".project-container .sidebar li[data-path]");
if (sidebarLi) {
    sidebarLi.forEach(elem => {
        elem.addEventListener('click', (e) => {
            console.log("inside elementClick");
            // projectLoader();
            loadHtmlFile(e.currentTarget);
        });
    })
} else {
    console.log(sidebarLi);
}

async function loadHtmlFile(event) {
    let path = event.getAttribute("data-path");
    const html = await fetch(path).then((data) => data.text());
    let content = document.querySelector(".project-container .content");
    content.innerHTML = html;

    switch(path)
    {
        case "/portfolio/pages/template/Project/HttpRequestChecker/httpRequestCheck.html":
            loadJS('/portfolio/pages/template/Project/HttpRequestChecker/httpRequestCheck.js?cachebuster='+ new Date().getTime() , function(){}, document.querySelector(".project-container .content"));
            break;
        default:
            break;
    }
}

