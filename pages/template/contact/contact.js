import { LoadFileToText } from "/portfolio/js/Utils/Loader.js";
import { Contact_Pagination } from "/portfolio/pages/template/contact/pagination/contact_pagination.js";
let message_template_text = await LoadFileToText("/portfolio/pages/template/contact/messageTemplate.html");

export function Contact(){
    RegisterButtons();
}

// function loadContent(){
//     let main_container=document.querySelector(".contact-container .message_container .content");
//     let message_template = document.createElement('template');
//     message_template.innerHTML = message_template_text;
//     main_container.appendChild(message_template.content.cloneNode(true));
// }

function RegisterButtons(){
    let unreadButton = document.querySelector(".contact-container .message_container .types .unread")
    unreadButton.addEventListener("click",()=>{
        Contact_Pagination(false);
    })
    let readButton = document.querySelector(".contact-container .message_container .types .read")
    readButton.addEventListener("click",()=>{
        Contact_Pagination(true);
    })
    Contact_Pagination(false);
}