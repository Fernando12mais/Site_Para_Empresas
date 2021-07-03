let imagens=['content/foto6.jpg','content/foto3.jpg'];


let seta1=document.querySelector("#seta1").addEventListener("click",proximo)
let seta2=document.querySelector("#seta2").addEventListener("click",anterior)
let visualizacao=document.querySelector("#foto3");
let marcador1=document.querySelector("#marcador1");
let marcador2=document.querySelector("#marcador2");



function proximo(){
	
	visualizacao.src=imagens[1]
	marcador1.style.opacity="1"
	marcador2.style.opacity="0.3"



}

function anterior(){
	visualizacao.src=imagens[0]
	marcador1.style.opacity="0.3"
	marcador2.style.opacity="1"
}

	

