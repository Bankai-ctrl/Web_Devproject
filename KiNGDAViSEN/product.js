
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
    		autoplayTimeout:5000,
    		autoplayHoverPause:true
		 })
		var active = false	
		function bar() {
			var b4 = document.querySelector('.b4')
			active = !active
			if (active){
				document.getElementById("mobilenav").style.display = "block"
				b4.classList.remove('navbar-toggler')
				b4.classList.add('navbar-toggler')
			}
			else {
				document.getElementById("mobilenav").style.display = "none"
				b4.classList.remove('navbar-toggler')
				b4.classList.add('navbar-toggler')
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

			var lnk = document.getElementById('lnk');
			var scrollValue = window.scrollY;

			if (scrollValue < 150) {
				lnk.classList.remove('bgColort');
			} else{
				lnk.classList.add('bgColort')
			}
		}

		document.addEventListener('scroll', changeBg);

		document.addEventListener('scroll', () => {
			const collapse = document.querySelector('collapse');

			if (window.scrollY > 0) {
				collapse.classList.add('scrolled');
			} else {
				collapse.classList.remove('scrolled');
			}
		})
		
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
						text.innerHTML = "Invalid!Please input a Valid format";
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

