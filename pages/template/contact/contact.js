import { LoadFileToText } from "/portfolio/js/Utils/Loader.js";
import { Contact_Pagination } from "/portfolio/pages/template/contact/pagination/contact_pagination.js";
import {Post , Get } from "/portfolio/js/Utils/RestFullApiRequester.js"
import { Message } from "/portfolio/pages/template/contact/Model/Message.js"
let message_template_text = await LoadFileToText("/portfolio/pages/template/contact/messageTemplate.html");

export function Contact(){
    RegisterButtons();
    SumbitContactForm();
    isReadContent=false;
}

// function loadContent(){
//     let main_container=document.querySelector(".contact-container .message_container .content");
//     let message_template = document.createElement('template');
//     message_template.innerHTML = message_template_text;
//     main_container.appendChild(message_template.content.cloneNode(true));
// }
let isReadContent=false;
function RegisterButtons(){
    let unreadButton = document.querySelector(".contact-container .message_container .types .unread");
    unreadButton.addEventListener("click",()=>{
        isReadContent=false;
        Contact_Pagination(isReadContent);
    })
    let readButton = document.querySelector(".contact-container .message_container .types .read");
    readButton.addEventListener("click",()=>{
        isReadContent=true;
        Contact_Pagination(isReadContent);
    })
    Contact_Pagination(false);
}

 function SumbitContactForm(){
    let submitform = document.querySelector(".contact-container form input[type=\"submit\"] ");
    submitform.addEventListener("click",async ()=>{
        let id = 0;
        let username=  document.querySelector(".contact-container form input[name=\"username\"] ").value;
        let email=  document.querySelector(".contact-container form input[name=\"email\"] ").value;
        let type=  document.querySelector(".contact-container form select[name=\"type\"] ").value;
        let message=  document.querySelector(".contact-container form textarea[name=\"message\"] ").value;
        let messageModel = new Message(id,username,email,"2022-10-09T08:51:47.5595935+00:00",type,message,false);
        let response =  await Post("https://localhost:5001/contact/",messageModel);
        if(response.status == 200){

                window.db.contact = await Get("https://localhost:5001/contact/", null);
                Contact_Pagination(isReadContent);
                console.log(window.contact);
                console.log("submitted");
        }
        console.log(response);
    })
}