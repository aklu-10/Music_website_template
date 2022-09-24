
		window.onscroll=(e)=>
		{
			let home=document.querySelector("#home");
			let about=document.querySelector("#about");
			let contact=document.querySelector("#contact");
			

			let hl=document.querySelector("#hlink");
			let al=document.querySelector("#alink");
			let cl=document.querySelector("#clink");

			let home_t=home.offsetTop;
			let about_t=about.offsetTop;
			let contact_t=contact.offsetTop;
			let home_b=home.clientHeight;
			let about_b=about.clientHeight;
			let contact_b=contact.clientHeight;

			let scrollVal=document.documentElement.scrollTop;

			if(scrollVal>=home_t && scrollVal<=home_b-40){
				hl.classList.add("active");
			}
			else
			{
				hl.classList.remove("active");

			}
			
			if(scrollVal>=about_t && scrollVal<=about_b){
				al.classList.add("active");
			}
			else
			{
				al.classList.remove("active");

			}
			
			if(scrollVal>=contact_t) {
				cl.classList.add("active");
			}
			else
			{
				cl.classList.remove("active");

			}


			if(about.offsetTop==scrollVal)
			{
				about.style.left='0%';
				let arrow=document.querySelector(".arrow");
				arrow.style.display="none";
			}

			else if(about.offsetTop-50>=scrollVal)
			{
				let arrow=document.querySelector(".arrow");
				arrow.style.display="block";
			}

			if(scrollVal>=300)
			{
				about.style.left='0%';

			}

		}
