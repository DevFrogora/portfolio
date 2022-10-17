import { LoadFileToText } from "/portfolio/js/Utils/Loader.js";

let list_item ;

let current_page = 1;
let rows = 5; // number of item to display
let TableHeader = await LoadFileToText("/portfolio/pages/template/Project/pagination/PaginationTableHeader.html");
let projectItem = await LoadFileToText("/portfolio/pages/template/Project/pagination/tempt-projectItem.html");
let list_wrapper;

function DisplayList(items, rows_per_page, page) {
    let wrapper = document.querySelector('.pagination_content .content');
    list_wrapper = wrapper;
    wrapper.innerHTML = "";
    let headerTemp = document.createElement('template');
    headerTemp.innerHTML = TableHeader;
    wrapper.appendChild(headerTemp.content.cloneNode(true));

    page--;
    // document.cookie = "SameSite=None; Secure";
    let loop_start = rows_per_page * page;
    // if page = 0 then loop start 0, 
    // if page = 1 then loop start 5, 
    let loop_end = loop_start + rows_per_page;

    for (let index = loop_start; index < loop_end; index++) {
        const element = items[index];

        if(element)
        {   const template = document.createElement('template');
            template.innerHTML = projectItem;
            const cloneTemp = template.content.cloneNode(true);  // clone it to query inside it
            cloneTemp.querySelector(".container .name").innerHTML = element.name;
            cloneTemp.querySelector(".container .languages").innerHTML = element.languages;
            cloneTemp.querySelector(".container .applicationtype").innerHTML = element.applicationType;
            cloneTemp.querySelector(".container .source a").href = element.sourceLink;
            cloneTemp.querySelector(".container .preview a").href = element.previewLink;
            let dt = new Date(element.date);
            let day = dt.getDate(),
                month = dt.getMonth(),
                year = dt.getFullYear(),
                hours = dt.getHours(),
                minutes = dt.getMinutes(),
                seconds = dt.getSeconds();
            let dateFormat = day + '/' + (month + 1) + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
            cloneTemp.querySelector(".container .date").innerHTML = dateFormat;
            wrapper.appendChild(cloneTemp)
        }
    }
}

function SetupPagination(items,  rows_per_page) {
    let wrapper = document.getElementById('pagination');
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

function SearchButton() {

    let search_btn = document.querySelector('.pagination_content .search_container .search_btn');
    search_btn.addEventListener('click', () => {
        let input = document.querySelector('.pagination_content .search_container input').value;

        let indexForSearch = 0;
        let itemsProcessed = 0;

        list_item.forEach((element) => {
            if (element.name.includes(input)) {
                searchList[indexForSearch] = element;
                console.log("found");
                indexForSearch++;
            }
            itemsProcessed++;
            if (itemsProcessed === list_item.length) {
                console.log(searchList);
                current_page = 1;

                DisplayList(searchList, rows, current_page);
                SetupPagination(searchList, rows);
                searchList = [];
                searchList.length = 0
            }
        });
    });
}
let searchList = [];

export async function Pagination() {
    // list_item = await Get("https://localhost:5001/project/",null);
    list_item =  window.db.project;
    if(list_item != null)
    {
        // console.log(list_item);
        DisplayList(list_item, rows, current_page);
        SetupPagination(list_item, rows);
        SearchButton();
    }

}