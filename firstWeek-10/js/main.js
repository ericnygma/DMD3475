//Variables
var count = document.querySelector('.count');
//var user = document.querySelector('input');
//user.addEventListener('change', getUsers);
//var button = document.querySelector('#submit');
//button.addEventListener('click', getUsers);

let myRequest = new Request("./json/users.json")
  







//count.textContent = total_count + 'Total results';


/* fetch('./json/users.json')
.then(res => res.json())
.then(json => console.log(json))

 */


/* fetch(myRequest)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.total_count);
        console.log(data.items);
        console.log(data.items[0].login);
        
}) */

mySearch();
//async
async function mySearch() {
    const response = await fetch('./json/users.json');
    const object =  await response.json();
    const items = await object.items;
    console.log(response);
    console.log(object.total_count);
    console.log(items.length);
    console.log(object);
    console.log(items);
    document.querySelector('.count').innerHTML = object.total_count + ' Search results';
    for(let i = 0; i < items.length; i++) {
        //console.log(items[i].login);
        //console.log(items[i].html_url);
        let div = document.createElement('div');
        document.getElementById('userResult').innerText = items[i].login;
    }  
}

let uList = document.querySelector("#resourceList");

resources.forEach(function(item) {
    let li = `<li><a href="${item.href}" title="${item.title}">${item.innerHTML}</a></li>`;
    ul.innerHTML += li;

});



//Attempt
/* let li = `<li>${items[i].login}
<a href="${items[i].html_url}" title="${items.title}">${items.innerHTML}</a></li>`;
    ul.innerHTML += li;
 */

//------everything below is work in progress ( mostly broken shit)------
/* example from book 
fetch("./json/users.json").then(response => {
    console.log(response.status);
    console.log(response.headers.get("content-TYPE"));
}); */

/* non working function 1  
function getUsers(e) {
    var user = document.querySelector('input');
    console.log('Seraching for: ' + user.value);
    //count.innerHTML = " you are searching for: " + user.value;
    
} */
/* non working function 2
function getUsers(e) {
    console.log("Saving value ", user.e.target.value);
    e.preventDefault();
}; */