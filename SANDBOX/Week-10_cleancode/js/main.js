//Variables
const api_end = 'https://github.uconn.edu/api/v3/search/users?q=Andy';
const api_test = './json/users.json';
var count = document.querySelector('.count');
//var user = document.querySelector('input');
//user.addEventListener('change', getUsers);
var button = document.querySelector('#submit');
button.addEventListener('click', getUsers);

//Start of new block of code...
/* const formData = document.querySelector('.submit');


formData.addEventListener('submit', function(e){
    e.preventDefault();

    const userData = new  UserData(this);

    fetch('./login.php', {
        method: 'post',
        body: userData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.log(error);
    })
}); */
//End of code...
function getUsers() {
    let x = document.getElementById("users").value;
    document.getElementById("userResult").innerHTML = x;
    }

 

//async
async function mySearch() {
    const response = await fetch(api_end);
    const object =  await response.json();
    const items = await object.items;
   /*  console.log(response);
    console.log(object.total_count);
    console.log(items.length);
    console.log(object);
    console.log(items); */
    document.querySelector('.count').innerHTML = object.total_count + ' Search results';
    
 
    items.forEach(element => {
        console.log(element.avatar_url);
        
        
        document.getElementById('userResult').innerHTML += `
        <ul>
            <img src="${element.avatar_url}" alt="" width="100" height="100"> 
            <li>Login: ${element.login}</li>
            <li>User page: <a href="${element.html_url}" title="${items.title}">${element.html_url}</a></li>
            
        </ul>
        
        `;
        
        element.login;
        element.html_url;
    });
    
    
}

mySearch();








