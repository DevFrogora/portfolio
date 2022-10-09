import { LoadFileToText } from "/portfolio/js/Utils/Loader.js";

let message_template_text = await LoadFileToText("/portfolio/pages/template/contact/messageTemplate.html");

export function Contact(){
    loadContent();
}

function loadContent(){
    let main_container=document.querySelector(".contact-container .message_container .content");
    let message_template = document.createElement('template');
    message_template.innerHTML = message_template_text;
    main_container.appendChild(message_template.content.cloneNode(true));
}