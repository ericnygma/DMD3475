//Variables
const api_end = 'https://github.uconn.edu/api/v3/search/users?q=';
const api_test = './json/users.json';
var sub = document.querySelector('input').value;
var count = document.querySelector('.count');
const form = document.getElementById("formData");
        
        async function handleSubmit(event) {
          event.preventDefault();
          //var finder = api_end + sub;
          const status = document.getElementById("userResult");
          //const data = new FormData(event.target);
          const response = await fetch(event.target.action, { 
           // method: form.method,
             
          });
          const object =  await response.json();
          const items =  object.items;
          

            console.log(object);
            console.log(items);
            console.log(object.total_count);
            count.innerHTML = object.total_count + ' Search results'  //document.querySelector('.count')

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


          /* .then(response => {
              //Check for errors on form
              if (!response.ok){
                  throw new Error('response not ok');
              }
            status.innerHTML = "Thanks for your submission!";
            form.reset()
            }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }); */
        }
        form.addEventListener("submit", handleSubmit);
