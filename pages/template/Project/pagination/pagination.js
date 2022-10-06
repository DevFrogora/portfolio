import { LoadFileToText } from "/portfolio/js/Utils/Loader.js";


const list_item = [
    "item_1",
    "item_2",
    "item_3",
    "item_4",
    "item_5",
    "item_6",
    "item_7",
    "item_8",
    "item_9",
    "item_10",
    "item_11",
    "item_12",
    "item_13",
    "item_14",
    "item_15",
    "item_16",
    "item_17",
    "item_18",
    "item_19",
    "item_20",
    "item_21",
    "item_22",
    "item_23",
    "item_24",
    "item_25",
];

let current_page = 2;
let rows = 5; // number of item to display
let projectItem = await LoadFileToText("/portfolio/pages/template/Project/pagination/tempt-projectItem.html"); 
function DisplayList(items, rows_per_page, page) {
    let wrapper = document.querySelector('.pagination_content .content');
    wrapper.innerHTML = "";
    let pagination_element = document.getElementById('pagination');

    page--;
    document.cookie = "SameSite=None; Secure";
    let loop_start = rows_per_page * page;
    // if page = 0 then loop start 0, 
    // if page = 1 then loop start 5, 
    let loop_end = loop_start + rows_per_page;
    for (let index = loop_start; index < loop_end; index++) {
        const element = items[index];

        const template = document.createElement('template');
        template.innerHTML = projectItem;
        const cloneTemp = template.content.cloneNode(true);  // clone it to query inside it
        cloneTemp.querySelector(".container .name").innerHTML = element;
        wrapper.appendChild(cloneTemp)

    }

}

export function Pagination() {
    DisplayList(list_item, rows, current_page);
}