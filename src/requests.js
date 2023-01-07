const apiLink = "https://hackathonbackend-bnldi3x7oq-uw.a.run.app/api/";

export async function postReq(data, path, link = apiLink){
    fetch(link + path, {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .catch((err) => console.log(err))
    .then(response => response.text())
    .then(response => Get("post-content").append(response));
}

export async function getReq(path, link = apiLink){
    fetch(link + path, {
        method: "GET",
        headers:{
            "Content-Type" : "application/json"
        }
    })
    .catch((err) => console.log(err))
    .then(response => response.text())
    .then(response => console.log(response));
}