//Variables
const api_end = 'https://github.uconn.edu/api/v3/search/users?q=Brian';
const api_test = './json/users.json';
var count = document.querySelector('.count');
//var user = document.querySelector('input');
//user.addEventListener('change', getUsers);
//var button = document.querySelector('#submit');
//button.addEventListener('click', getUsers);


  
//async
async function mySearch() {
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
        
       
    });
    
    
}

mySearch();



