import { LoadFileToText } from "/portfolio/js/Utils/Loader.js";
import { loadJS } from "/portfolio/js/Utils/ScriptLoader.js";
import { ProjectLoader } from "/portfolio/pages/template/Project/projectLoader.js";
import "/portfolio/pages/template/about/resume-table.js";



let navTemplate = await LoadFileToText("/portfolio/pages/template/navigation/navigation-template.html");
const template = document.createElement('template');
template.innerHTML = navTemplate;
// template.innerHTML.interpolate(navTemplate);

const route = (event) => {
    event = event || window.event;
    // event.preventDefault();
    window.history.pushState({}, "", event.getAttribute("customPath"));
    handleLocation();
};

const routes = {
    404: "/portfolio/pages/404.html",
    "/": "/portfolio/pages/home.html",
    "/project": "/portfolio/pages/project.html",
    "/experience": "/portfolio/pages/experience.html",
    "/contact": "/portfolio/pages/contact.html",
    "/about": "/portfolio/pages/about.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    // window.location.reload();
    switch (path) {
        case "/project":
            ///portfolio/pages/template/Project/projectLoader.js?cachebuster='+ new Date().getTime() 
            // loadJS('/portfolio/pages/template/Project/projectLoader.js' , function(){}, document.getElementById("main-page"));
            ProjectLoader();
            break;
        case "/about":
            // loadJS('/portfolio/pages/template/about/resume-table.js' ,function(){}, document.getElementById("main-page"));
            // ResumeTable(null);
            break;
        case "/contact":
            break;
        case "/experience":
            break;
        default:
            LoadHomeRoute();
            break;
    }
};

async function LoadHomeRoute() {
    const html = await fetch(routes["/"]).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    OnSlotItemClicked(e) {
        route(e);
    }

    connectedCallback() {
        let toggleTheme = true;
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.querySelector('span').innerHTML = this.getAttribute('name');
        this.shadowRoot.querySelector('.navigation-element .navigation-logo .logo img').
            addEventListener('click', (e) => {
                // console.log(e); 
                this.OnSlotItemClicked(e.target);
            });

        this.shadowRoot.querySelector('slot').
            addEventListener('click', (e) => this.OnSlotItemClicked(e.target));

        let button = this.shadowRoot.querySelector(".navigation-element .theme-container .btn");
        button.querySelector(".dropdown div").style.display = "none";
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            if (toggleTheme == false) {
                button.querySelector(".dropdown div").style.display = "none";
                toggleTheme = true;
            } else {
                button.querySelector(".dropdown div").style.display = "flex";
                toggleTheme = false;
            }

        });
        let dropdown = this.shadowRoot.querySelectorAll(".navigation-element .theme-container button .dropdown-container .dropdown .option");
        dropdown.forEach(elem => elem.addEventListener('click', (e) => {
            e.stopPropagation();
            // console.log("child", e.currentTarget.getAttribute("data-name"));
            let themeSelected = e.currentTarget.getAttribute("data-name");
            switch (themeSelected) {
                case "OS":

                    document.querySelector("html").setAttribute("data-theme", "auto");
                    button.querySelector(".dropdown div").style.display = "none";
                    toggleTheme = true;
                    break;
                case "Light":
                    document.querySelector("html").setAttribute("data-theme", "light");
                    button.querySelector(".dropdown div").style.display = "none";
                    toggleTheme = true;
                    break;
                case "Dark":
                    document.querySelector("html").setAttribute("data-theme", "dark");
                    button.querySelector(".dropdown div").style.display = "none";
                    toggleTheme = true;
                    break;

                default:
                    break;
            }
            // e.target.getAttribute("src");

        }));

        document.addEventListener("click", (event) => {
            // this.shadowRoot.querySelector(".navigation-element .theme-container button .dropdown-container .dropdown .option").contains();

            let isClickInside = button.querySelector(".dropdown div").contains(event.target);

            if (!isClickInside) {
                button.querySelector(".dropdown div").style.display = "none";
                toggleTheme = true;
            }
        });

    }

    disconnectedCallback() {
    }
}


window.customElements.define('navigation-menu', Navigation);