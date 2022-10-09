export async function Get(url,id = null) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    if (id != null) {
        url = url + id;
    }
   return await FetchRequest(url,requestOptions);
}

export async function Post(url,ModelObject) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(ModelObject);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
  return await  fetch(url, requestOptions)
  .then(response => {return response})
  .catch(error => console.log('error', error));
}

export function Put(url,id, ModelObject) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(ModelObject);

    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    url = url+id;
    FetchRequest(url,requestOptions);
}

export function Delete(url,id) {
    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    url = url+id;
    FetchRequest(url,requestOptions);
}

async function FetchRequest(url,requestOptions){
 return await fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => console.log('error', error));
}  //storeValueIn = JSON.stringify(result, null, 4)