import { LoadFileToText } from "/portfolio/js/Utils/Loader.js";
import { loadJS } from "/portfolio/js/Utils/ScriptLoader.js";
import { Pagination } from "/portfolio/pages/template/Project/pagination/pagination.js";
import { HttpRequestChecker } from "/portfolio/pages/template/Project/HttpRequestChecker/httpRequestCheck.js";


async function loadHtmlFile(event) {
    let path = event.getAttribute("data-path");
    const html = await fetch(path).then((data) => data.text());
    let content = document.querySelector(".project-container .content");
    content.innerHTML = html;

    switch (path) {
        case "/portfolio/pages/template/Project/HttpRequestChecker/httpRequestCheck.html":
            // loadJS('/portfolio/pages/template/Project/HttpRequestChecker/httpRequestCheck.js?cachebuster=' + new Date().getTime(), function () { }, content);
            // content = document.querySelector(".project-container .content") ;
            HttpRequestChecker();
            break;
        case "/portfolio/pages/template/Project/pagination/pagination.html":
            // loadJS('/portfolio/pages/template/Project/pagination/pagination.js', Pagination, content);
            Pagination();
            break;
        default:
            break;
    }
}


export function ProjectLoader() {
    let sidebarLi = document.querySelectorAll(".project-container .sidebar li[data-path]");
    if (sidebarLi) {
        sidebarLi.forEach(elem => {
            elem.addEventListener('click', (e) => {
                // console.log("inside elementClick");
                // projectLoader();
                loadHtmlFile(e.currentTarget);
            });
        })
        loadDefaultPage();
    } else {
        console.log(sidebarLi);
    }
}

async function loadDefaultPage() {
    let path ="/portfolio/pages/template/Project/pagination/pagination.html";
    const html = await fetch(path).then((data) => data.text());
    let content = document.querySelector(".project-container .content");
    content.innerHTML = html;
    Pagination();
}