// import resume from "/portfolio/pages/template/about/resume.json" assert {type: 'json'};


class ResumeTableElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        (async () => {
            let resume =  window.db.resume;
            let headingTemplate = document.createElement('template');
            headingTemplate.innerHTML = Basics(resume.basics);

            let educationTemplate = document.createElement('template');
            educationTemplate.innerHTML = educationsList(resume.educations);

            let skillTemplate = document.createElement('template');
            skillTemplate.innerHTML = skillsList(resume.skills);

            let table = document.createElement("table");
            table.appendChild(headingTemplate.content.cloneNode(true));
            table.appendChild(educationTemplate.content.cloneNode(true));
            table.appendChild(skillTemplate.content.cloneNode(true));
            this.appendChild(table);
        })();
    }

    disconnectedCallback() { }
}

function Basics(basics) {
    let list = `<tr class="first-row-container">
                    <td>
                        <div class="col1">
                            <div>
                                ${basics.name}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="col2">
                            <div>
                                Phone - ${basics.phone}
                            </div>
                            <div>
                                Email - ${basics.email}
                            </div>
                            <div>
                                Address : ${basics.location.address + " ," + basics.location.postalCode + " ," +
        basics.location.city + " ," + basics.location.state + " ," + basics.location.countryCode} 
                            </div>
                        </div>
                    </td>
                </tr> `;
    return list;
}

function educationsList(educations) {
    console.log(educations);
    let list = "";
    list += `<tr class="second-row-container">
                <td colspan="2">
                    <div class="col1">
                        <div class="section">
                            Education
                        </div>
                    </div>
                </td>
            </tr>`;
    for (let index = 0; index < educations.length; index++) {
        let education = educations[index];

        list += `<tr class="third-row-container">
                    <td >
                        <div class="col1">
                            <div>
                                ${formatDate(education.startDate,"Year")}-${formatDate(education.endDate,"Year")}
                            </div>
                        </div>
                    </td>
                    <td >
                        <div class="col2">
                            <div>
                                ${education.courses}
                            </div>
                            <div>
                                ${education.institution}
                            </div>
                        </div>
                    </td>
                </tr>`;
        list += academic(education.projects); // name should be projects , please correct it in json
    }
    return list;
}

function formatDate(date, formatType) {
    let dt = new Date(date);
    let day = dt.getDate(),
        month = dt.getMonth(),
        year = dt.getFullYear(),
        hours = dt.getHours(),
        minutes = dt.getMinutes(),
        seconds = dt.getSeconds();
    let dateFormat;
    switch (formatType) {
        case "MonthYear":
            dateFormat = month + "-" + year;
            break;
        case "Year":
            dateFormat = year;
            break;
        default:
            break;
    }
    // dateFormat = day + '/' + (month + 1) + '/' + year;
    return dateFormat;
}

function academic(projects) {
    let list = `<tr class="ninth-row-container">
                    <td colspan="2">
                        <div class="col1">
                            <div class="section">
                                Academic Project
                            </div>
                        </div>
                    </td>
                </tr>`;
    for (let index = 0; index < projects.length; index++) {
        let project = projects[index]
        list += `<tr class="tenth-row-container">
                    <td>
                        <div class="col1">
                            <div>
                                ${formatDate(project.date,"MonthYear")}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="col2">
                            <div>
                                ${project.name} 
                            </div>
                            `;
        for (let index = 0; index < project.summary.length; index++) {
            list += `<div>➡${project.summary[index]} </div>`
        }

        list += `
                        </div>
                    </td>
                </tr>`;
    }
    return list;
}

function skillsList(skills) {
    console.log(skills);

    let list = "";
    list += `<tr class="forth-row-container">
                <td colspan="2">
                    <div class="col1">
                        <div class="section">
                            Skills
                        </div>
                    </div>
                </td>
            </tr>`;
    for (let i = 0; i < skills.length; i++) {
        let skill = skills[i];
        list += `
            <tr class="fifth-row-container"> 
                <td>
                    <div class="col1">
                        <div>
                            ${skill.name}
                        </div>
                    </div>
                </td>
                <td>
                    <div class="col2"> 
                    <div>`;
        for (let index = 0; index < skill.keywords.length; index++) {
            let format = ",";
            if (index == skill.keywords.length - 1) {
                format = "";
            }
            list += `${skill.keywords[index]} ${format}`
        }

        list += `
                    </div>
                </td>
            </tr>
            `;
    }
    return list;
}

// window.customElements.define('resume-table', ResumeTableElement);
customElements.define('resume-table', ResumeTableElement);