import { LoadFileToText } from "/portfolio/js/Utils/Loader.js";
import {Get } from "/portfolio/js/Utils/RestFullApiRequester.js"

let list_item ;
let current_page = 1;
let rows = 5; // number of item to display

let message_template_text = await LoadFileToText("/portfolio/pages/template/contact/messageTemplate.html");

function DisplayList(items, rows_per_page, page) {
    let wrapper = document.querySelector('.contact-container .message_container .content');
    wrapper.innerHTML = "";
    page--;
    let loop_start = rows_per_page * page;
    // if page = 0 then loop start 0, 
    // if page = 1 then loop start 5, 
    let loop_end = loop_start + rows_per_page;

    for (let index = loop_start; index < loop_end; index++) {
        const element = items[index];

        if(element)
        {   const template = document.createElement('template');
            template.innerHTML = message_template_text;
            const cloneTemp = template.content.cloneNode(true);  // clone it to query inside it
            cloneTemp.querySelector(".message_template .user_name").innerHTML = element.username;
            cloneTemp.querySelector(".message_template .type").innerHTML = element.type;
            cloneTemp.querySelector(".message_template .message").href = element.message;
            let dt = new Date(element.date);
            let day = dt.getDate(),
                month = dt.getMonth(),
                year = dt.getFullYear(),
                hours = dt.getHours(),
                minutes = dt.getMinutes(),
                seconds = dt.getSeconds();
            let dateFormat = day + '/' + (month + 1) + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
            cloneTemp.querySelector(".message_template .date").innerHTML = dateFormat;
            wrapper.appendChild(cloneTemp)
        }
    }
}

function SetupPagination(items,  rows_per_page) {
    let wrapper = document.querySelector('.contact-container .message_container .pagination');
    wrapper.innerHTML = "";
    let page_count = Math.ceil(items.length / rows_per_page);
    for (let index = 1; index < page_count + 1; index++) {
        // const element = array[index];
        let btn = PaginationButton(index, items);
        wrapper.appendChild(btn);
    }
}

function PaginationButton(index, items) {
    let button = document.createElement('button');
    button.innerHTML = index;

    if (current_page == button.innerHTML) {
    }

    button.addEventListener('click', () => {
        current_page = button.innerHTML;
        DisplayList(items, rows, current_page);
    });
    return button;
}


export async function Contact_Pagination() {
    list_item = await Get("https://localhost:5001/contact/",null);
    if(list_item != null)
    {
        console.log(list_item);
        DisplayList(list_item, rows, current_page);
        SetupPagination(list_item, rows);
    }
}