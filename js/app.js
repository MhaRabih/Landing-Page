
/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('ul');
const navsec = document.querySelectorAll('h2');
const section = document.getElementsByTagName('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// Build menu
function createMenue(){ for(let i = 0; i < navsec.length; i++){
const li = document.createElement('li');
	li.textContent=navsec[i].textContent;
	li.className="button";
	navbar.append(li);
	// Scroll to section on link click
	li.addEventListener('click',function(){
		navsec[i].parentNode.scrollIntoView();
	
  });
 }
}
// Set sections and navigation bar buttons as active 
function onVeiw(){	  
  for(let i = 0; i < section.length; i++){
       const rect = section[i].getBoundingClientRect();
	   section[i].classList.remove("your-active-class");

        if(rect.left>=0&&rect.top>=0&&rect.right<=window.innerWidth&&rect.bottom<=window.innerHeight)

         {
	       section[i].className+="your-active-class";
		  list[i].className="your-active-list";
	     }
     
        else{
			section[i].classList.remove("your-active-class");
			list[i].classList.remove("your-active-list");
	     }	
  }
}

createMenue();
const list = document.querySelectorAll('.button');
console.log(list);
window.addEventListener('scroll', function (){ 
	onVeiw();
});








