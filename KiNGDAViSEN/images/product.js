
		AOS.init()

		$(document).ready(function(){
	  		$(".owl-carousel").owlCarousel();
			});


		var owl = $('.owl-carousel');
			owl.owlCarousel({
    		items:1,
    		loop:true,
    		margin:5,
    		autoplay:true,
    		autoplayTimeout:9000,
    		autoplayHoverPause:true
		 })

			
		var active = false	
		function bar() {
			active = !active
			if (active){
				document.getElementById("mobilenav").style.display = "block"
			}
			else {
				document.getElementById("mobilenav").style.display = "none"
			}
		};

		function changeBg() {
			var collapsibleNavbar = document.getElementById('collapsibleNavbar');
			var scrollValue = window.scrollY;
			// console.log(scrollValue);
			if(scrollValue < 150){
				collapsibleNavbar.classList.remove('bgColor');
			} else{
				collapsibleNavbar.classList.add('bgColor')
			};
		};	
		document.addEventListener('scroll', changeBg);

		
				var active = false
				function plame() {
					var playy = document.querySelector('.playy')
					active = !active

					if(active){
						document.getElementById('playy').play()
					}
					else{
						document.getElementById('playy').play()
					}
				}
				function lame() {
					var playy = document.querySelector('.playy')

					if(active){
						document.getElementById('playy').pause()
					}else{
						document.getElementById('playy').pause()
					}
				}

				var active = false
				function plamee() {
					var playyy = document.querySelector('.playyy')
					active = !active

					if(active){
						document.getElementById('playyy').play()
					}
					else{
						document.getElementById('playyy').play()
					}
				}
				function lamee() {
					var playyy = document.querySelector('.playyy')

					if(active){
						document.getElementById('playyy').pause()
					}else{
						document.getElementById('playyy').pause()
					}
				}

				function validation() {
					var form = document.getElementById("form");
					var email = document.getElementById("email").value;
					var text = document.getElementById("text");

					var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;


					if (email.match(pattern)) {
						form.classList.add("valid");
						form.classList.remove("invalid");
						text.innerHTML = "Valid!";
						text.style.color = "#d3d3d3";
						
					}
					else{
						form.classList.remove("valid");
						form.classList.add("invalid");
						text.innerHTML = "Invalid!";
						text.style.color = "red";
						text.style.display = "block";
					}

					if (email == "") {
						form.classList.remove("valid");
						form.classList.remove("invalid");
						text.innerHTML = "";
						text.style.color = "#d3d3d3";
					}
				}



	var letters = animate_letters('.text_to_animate', {
    // add class(es) list 'class_1 class_2' or ''
    prepare : 'letters_in_top',
    // classes to add by phases
    // set : []  |  ['class_a']  |  ['class_a','class_b']
    add : [
      // phase 1
      [],
      // phase 2
      ['rotate_letters'],
      // phase 3
      ['space_letters','color_letters'],
      // phase 4
      []
    ],
    // classes to remove by phases arrays of classes
    // set : []  |  ['class_a']  |  ['class_a','class_b']
    remove : [
      // phase 1
      ['letters_in_top'],
      // phase 2
      [],
      // phase 3
      [],
      // phase 4
      ['space_letters','color_letters']
    ],
    // timers by phases -> array of objects
    // set : {  delay : [integer in milliseconds],
    //          increment_delay : [integer in milliseconds]  }
    timers : [
      { delay : 0, increment_delay : 60 },  // phase 1
      { delay : 100, increment_delay : 40 },  // phase 2
      { delay : 80, increment_delay : 30 },  // phase 3
      { delay : 0, increment_delay : 20 }   // phase 4
    ],
    // remove spans who wrapped letters at the end of last phase
    // set : true / false
    clean_after : true,
    // function to launch at the end of the last phase
    // set : your_function() or null
    end_callBack : function(){
      // sibling text container
      var container_text = document.querySelector('.text_to_animate');
      // add a class
      container_text.classList.add('callback_anim');
      // remove after n seconds
      var Timer = setTimeout(()=>{
          container_text.classList.remove('callback_anim');
          clearTimeout( Timer );
      }, 800 );
    }
});

letters.run();