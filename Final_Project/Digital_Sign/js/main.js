//DOM
const time = document.querySelector('time'),
    greeting = document.getElementById('greeting'),
    urName = document.getElementById('name'),
    date = document.querySelector('date'),
    now = document.querySelector('now');
    

//API infor
const AK = "8vRzc2a6YbiK-SkHz6KSBfylu-HA-R5urpuTKZP-bp8"
const SK = "_50xrugdgxy4Fi3GhXY0aN-j2utZFjUYabTccibTRsw"


// Show Time
function showTime() {
    let today = new Date(),
        fd = today.toString();
     
    now.innerHTML = fd;
    setTimeout(showTime, 1000);
}  

//TESTING AREA BELOW
let def_with = 80;

//Main Interval
setInterval(() => {
	
	
	//calculate percentage for day
    let now = new Date(),
	    startOfDay = new Date();
	startOfDay.setHours(0);
	startOfDay.setMinutes(0);
	startOfDay.setSeconds(0);
	startOfDay.setMilliseconds(0);
	let elapsedD = now - startOfDay, 
	     dperc = elapsedD / 1000 / 86400;
	dperc = Math.round(dperc * 100000) / 1000;
	dbar.style.width = def_with * dperc / 100 + "vw";
}, 1000); 

// Set Background and Greeting (depending on time of day)
function setBG() {
    let today = new Date(),
        hour = today.getHours();
    
    if (hour < 12) {
        //Morning - displays a breakfast food image
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1600/?breakfast')";
        greeting.textContent = 'Good Morning';
        
    } else if ( hour < 18) {
        //Afternoon - displays lunch food image
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1600/?lunch')";
        greeting.textContent = 'Good Afternoon';
        
    } else {
        //Evening - displays dinner food image
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1660x1600/?dinner')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    } 
}

// Ask for name or retrieves from local storage 
function getName() {
    if (localStorage.getItem('name') === null) {
        urName.textContent = 'Enter Name';
        urName.focus();
    }else {
        urName.textContent = localStorage.getItem('name');
    }
}

//  Save name to local storage
function setName(e) {
    if(e.type === 'keypress') {
    // Confirm ENTER is Pressed
    if(e.which == 13 || e.keyCode == 13){
    localStorage.setItem('name', e.target.innerText); 
    urName.blur()
    }
    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}


urName.addEventListener('keypress', setName);
urName.addEventListener('blur', setName);


//Run
showTime();
setBG();
getName();

