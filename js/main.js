
// alert("Hello World!")

// console.log("Hello World!")
// keywords in variable declaration
// they inlcude: var or let
// var username : username here is an identifier
// variable name cannot be started with a number or a special character
// you cannot use space but you can use underscore i.e snake case
// camel case: the first letter of every word is capitalized
// Pascal case: start ever word capitalized
// quotes "" are for Strings alone
// Float boolean and int does not require quotes

var username = "Emmanuel"
let age = 59
var is_running = false

// console.log(username)


// THE LIST DATA TYPY USES THE SQUARE BRACKET
// WHERE WE USE 
// PUSH FOR MOVING AN ITEM INTO THE ARRAY
// SHIFT TO REMOVE THE FIRST ITEM WILL FROM THE ARRAY
// POP TO REMOVE THE LAST ITEM FROM THE ARRAY
// SPLICE CAN BE USED TO REMOVE ITEMS FROM THE ARRAY WITH STATING THEIR POSITIONS i.e(1,2) meaning 1 to 2



let mylist = [
    "Mango",
    "Orange",
    "Pawpaw"
]

console.log(mylist)
mylist.splice(1,2)
console.log(mylist)



// OBJECT DATA TYPE USES THE CURLY BRACKET
let myphone = {
    brand : "Redmi",
    color : "Green",
    screen_size : 6,
}

let mypowerbank = {
    brand : "Oraimo",
    capacity_mah : 30000,
    color : "Black",
    output : ["USB-C","4_USB"],
    input : 2
}
mypowerbank.brand = "Itel"

console.log(mypowerbank)

// PROMPT FUNCTION HELPS TO ASK QUESTION FROM A 
// We use an assignment function to store the result
// let x = prompt("What is your name")
// alert("Welcome"+x)

// LEARNING FLOW CONTROL


// ele.innerHtml = "Hello from JS"

function checkAge(){
    alert("clicked")
}
let ele= document.querySelector("#mydiv")
let personAge = document.querySelector("#PersonAge")

function checkAge(){
    // ele.innerHtml = personAge.value
    var age = personAge.value

    if (age > 30){
        ele.innerHTML = 'You are old'
    }else{
        ele.innerHTML = 'Well .... getting there'
    }
}

// DOM DOCUMENT OBJECT MODEL 13 AUGUSGT 2024
// It is the modeling the html for java script to manipulate
// HTTP OR WEB SOCKET

function ChangeImage(){
    var image = document.getElementById("img")
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRReIMnJvLnWAih-KBus6k2zTLWh50liPuu_Q&s"
    image.classList.add("img_round")
}
function loop() {
    var out = document.querySelector("#output")
    for(let i = 0; i < 100; i++){
        out.innerHTML += "<br> >>"+ i
        
    }
}
function while_loop() {
    var out = document.querySelector("#output");
    var x = 90;
    while(x>0){
        out.innerHTML += "<br> >>"+ x
        x--;
    }

}
// API
// Application Programming Interface. They are parts of the applications that cant work alone

function call_Api() {
    var out = document.querySelector("#output");
    fetch("https://dummyjson.com/recipes?limit=10&skip=10&select=name,image")
    .then((response)=>{
        if(response.status == 200){
            console.log("Wow Http Done")
            return response.json()
        }else{
            console.error("Request Failed")
        }
    }).then((data)=>{
    //    output.innerHTML = data.recipes[8].name
    for(let x=0; x< data.recipes.length; x++){
        var item = data.recipes[x]
        out.innerHTML +=GenerateListItem(item.image,item.name)
    }
    })
}
// Weather API
// API is used for communication between APIs. there is a fine line between bussiness logic and API
// function call_Api(){
//     var out = document.querySelector("#output");
//     fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={9a7df5848e9ff4062cf5df5d04a018fe}")
//     .then(response = reponse.json())
//     .then(data => {
//         const forecastData = data.list[0];
//         const temperature = forecastData.main.temp;
//         const humidity = forecastData.main.humidity;
//         const windSpeed = forecastData.wind.speed;
//         const description = forecastData.weather[0].description;

//     })
// }

function GenerateListItem(img, name){
    // generate list item accepts the image and the name
    var html_code = `
    <div>
        <img src='${img}' height = "300" /><br>
        <h3>${name}</h3>
    </div> 
    `;
    return html_code;
}
