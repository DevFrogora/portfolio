import { WeatherForecast } from "./Model/WeatherForcast.js"

let responseContainer = document.querySelector(".project-container .content .http_content .response_container pre code");

let buttons = document.querySelectorAll(".project-container .content .http_content .request_btn div button ");

buttons.forEach(elem => elem.addEventListener('click', (e) => {
    e.stopPropagation();
    let btn = e.currentTarget.getAttribute("data-btn");
    switch (btn) {
        case "GET": console.log("GET");
            Get();
            break;
        case "GET_BY_ID": console.log("GET By ID");
            Get(2);
            break;
        case "POST": console.log("POST");
            let newItem = new WeatherForecast(0, "2021-10-22T14:12:50.3080603-10:00", 16, "Very coldie");
            console.log(JSON.stringify(newItem));
            Post(newItem);
            break;
        case "PUT": console.log("PUT");
            let updatedItem = new WeatherForecast(5, "2021-10-22T14:12:50.3080603-10:00", 16, "Very coldie");
            console.log(JSON.stringify(updatedItem));
            Put(5, updatedItem);
            break;

        case "DELETE": console.log("DELETE");
            Delete(10)
            break;
        default:
            break;
    }

}));

function Get(id = null) {

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let url = "";
    if (id != null) {
        url = "https://localhost:5001/" + id;
    } else {
        url = "https://localhost:5001/";
    }
    FetchRequest(url,requestOptions);

}

function Post(ModelObject) {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(ModelObject);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let url = "https://localhost:5001/";
    FetchRequest(url,requestOptions);
}

function Put(id, ModelObject) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(ModelObject);

    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    let url = "https://localhost:5001/"+id;
    FetchRequest(url,requestOptions);
}

function Delete(id) {
    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    let url = "https://localhost:5001/"+id;
    FetchRequest(url,requestOptions);

}

function FetchRequest(url,requestOptions){
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => responseContainer.innerHTML = JSON.stringify(result, null, 4))
    .catch(error => console.log('error', error));
}