// const navLinks = document.querySelectorAll('.nav-item')
//           const menuToggle = document.getElementById('navbarNavDropdown')
//           const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle : false})
//           navLinks.forEach((l) => {
//               l.addEventListener('click', () => {bsCollapse.toggle()})
//           })
function change(){
	if(window.innerWidth<=992){
	let but=document.getElementById("navbarNav");
	but.classList.toggle("collapse");
	}
	else{
	
	}
	}