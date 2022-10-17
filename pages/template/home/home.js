export function home(){
    while(window.db == null){
        // sorry i have to take the help of this loop
    }
    let resume = window.db.resume;
    let main_content =`
    <h1>Hi, my name is ${resume.basics.name}</h1>

    <h3>${resume.basics.summary[0]}</h3>

    <p>
    ${resume.basics.summary[1]}
    </p>

    <button>Get In Touch</button>
    `;
    document.querySelector(".home-container").innerHTML = main_content;
}