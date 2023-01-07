const apiLink = "https://hackathonbackend-bnldi3x7oq-uw.a.run.app/api";

const Get = (id) => {return document.getElementById(id)}; //shorthand for fetching from DOM

async function postReq(data, path, link = apiLink){
    fetch(link + path, {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(response => Get("post-content").append(response));
}

async function getReq(path, link = apiLink){
    fetch(link + path, {
        method: "GET",
        headers:{
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.text())
    .then(response => console.log(response));
}

/* fetch("https://hackathonbackend-bnldi3x7oq-uw.a.run.app", {
    method: "GET"
})
.then(response => response.text())
.then(data => Log(data)); */

Get("post-button").addEventListener("click", () => {postReq({"number" : 50}, "/testServer/")});
getReq("/checkServer/");