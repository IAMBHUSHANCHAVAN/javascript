let a = Math.floor(Math.random() * 5);
console.log(a);
alert("you have 5 chance to guess the digit ")
let i = 0;
while (i < 5) {
    let ques = prompt("enter a value")
    if (ques == a) {
        alert(`you won the value was ${a}`)
        break
    }
    else if (ques > a) {
        alert("you are to ahed ")
    }
    else {
        alert("you are to behind ")
    }
    i++
}
// alert("thanks for playing")

let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit"
let getjoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item => console.log(item))
}
getjoke()