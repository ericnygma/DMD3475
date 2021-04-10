//Variables
const api_end = 'https://github.uconn.edu/api/v3/search/users?';
const api_test = './json/users.json';
var count = document.querySelector('.count');
var sub = document.querySelector('input').value;
//var user = document.querySelector('input');
//user.addEventListener('change', getUsers);
//var button = document.querySelector('#submit');
//button.addEventListener('click', getUsers);

//Start of new block of code...

async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(event.target.action, { 
        // method: form.method,
          
       });
};

/* const params = new userSearch({
    q: FormData,
});


const url = 'https://github.uconn.edu/api/v3/search/users?${params.toString() }'

console.log(url);

fetch(url)
.then(response => response.text())
.then(console.log) */

//End of code...


/* function getUsers() {
    let x = document.getElementById("users").value;
    document.getElementById("userResult").innerHTML = x;
    }
 */
 


    
//async all good working code
/* async function handleSubmit(event) {
    
    const response = await fetch(api_end);
    const object =  await response.json();
    const items = await object.items;
    //console.log(response);
    //console.log(object.total_count);
    //console.log(items.length);
    //console.log(object);
    //console.log(items);
    document.querySelector('.count').innerHTML = object.total_count + ' Search results';
    
 
    items.forEach(element => {
        
        
        
        document.getElementById('userResult').innerHTML += `
        <div class="d-flex">
            <div class="CircleBadge CircleBadge--small col-4 float-left">
                <img src="${element.avatar_url}" class="CircleBadge-icon" alt="" width="100" height="100"> 
            </div>
            <div class="col-6 float-left m-2">
                <ul>            
                    <li>Login: ${element.login}</li>
                    <li>User page: <a href="${element.html_url}" title="${items.title}">${element.html_url}</a></li>
                </ul>
        </div>
        `;
        
        element.login;
        element.html_url;
    });
    
    
} */





