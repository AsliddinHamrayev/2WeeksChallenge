window.onload = function (){
	let elements = document.querySelectorAll(".operators");
	let screen = document.querySelector('.results');
	let clear =   document.querySelector('.clear');
	
	for(let i=0;i<elements.length;i+=1){
		  if(elements[i].innerHTML === '='){
			    elements[i].addEventListener("click", calculate());
		  }else{
			   elements[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}
	

	
	
	function addtocurrentvalue (i){
		return function(){
			if (elements[i].innerHTML === "÷") {
               screen.innerHTML  +=  "/" ;
      }else if(elements[i].innerHTML === "x"){
			      screen.innerHTML += "*";
		   } else{
			   screen.innerHTML  += elements[i].innerHTML;
		   }
	  };
   }
 


   clear.onclick = function () {
    screen.innerHTML = '';
  }; 

 function calculate() {
    return function () {
        screen.innerHTML = eval(screen.innerHTML);
    };
  }
};