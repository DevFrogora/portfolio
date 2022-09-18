import { LoadFileToText } from "../../../js/modules/Loader.js";


let headingTemplateText = await LoadFileToText("/pages/template/about/resume-heading.html");
let headingTemplate = document.createElement('template');
headingTemplate.innerHTML = headingTemplateText;

let educationTemplateText = await LoadFileToText("/pages/template/about/resume-education.html");
let educationTemplate = document.createElement('template');
educationTemplate.innerHTML = educationTemplateText;

let skillTemplateText = await LoadFileToText("/pages/template/about/resume-skills.html");
let skillTemplate = document.createElement('template');
skillTemplate.innerHTML = skillTemplateText;

let academicTemplateText = await LoadFileToText("/pages/template/about/resume-academic.html");
let academicTemplate = document.createElement('template');
academicTemplate.innerHTML = academicTemplateText;


class ResumeTable extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let table = document.createElement("table");
        table.appendChild(headingTemplate.content.cloneNode(true));
        table.appendChild(educationTemplate.content.cloneNode(true));
        table.appendChild(skillTemplate.content.cloneNode(true));
        table.appendChild(academicTemplate.content.cloneNode(true));
        this.appendChild(table);
        
        console.log("hello resume");
    }

    disconnectedCallback() {
    }
}

window.customElements.define('resume-table', ResumeTable);