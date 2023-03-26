let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit"
let getjoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item => console.log(item.joke))
}
getjoke()