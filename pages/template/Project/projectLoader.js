import { LoadFileToText } from "../../../js/modules/Loader.js";


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
    // console.log(event);
    let path = event.getAttribute("data-path");
    // console.log(path);
    let paginationTemplateText = await LoadFileToText(path);  //"/pages/template/Project/pagination/pagination.html"
    let paginationTemplate = document.createElement('template');
    paginationTemplate.innerHTML = paginationTemplateText;
    let content = document.querySelector(".project-container .content");
    content.innerHTML = paginationTemplate.content.cloneNode(true).textContent;
    // console.log("inside projectLoader");
}

// console.log("projloader.js added");

