import { LoadFileToText } from "../../../js/modules/Loader.js";

let paginationTemplateText = await LoadFileToText("/pages/template/Project/pagination/pagination.html");
let paginationTemplate = document.createElement('template');

function projectLoader() {

    paginationTemplate.innerHTML = paginationTemplateText;
    let content = document.querySelector(".project-container .content");
    content.innerHTML = paginationTemplate.content.cloneNode(true).textContent;
    console.log("inside projectLoader");
}


let sidebarLi = document.querySelectorAll(".project-container .sidebar li");
if (sidebarLi) {
    sidebarLi.forEach(elem => {
        elem.addEventListener('click', (e) => {
            console.log("inside elementClick");
            projectLoader();
            console.log(e);
        });
    })
} else {
    console.log(sidebarLi);
}



console.log("projloader.js added");

