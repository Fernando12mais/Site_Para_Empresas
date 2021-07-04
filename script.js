let imagens=['content/foto3.jpg','content/foto6.jpg','content/foto4.jpg'];
let videos=['content/Videos/video1.mp4','content/Videos/video2.mp4']

let seta1=document.querySelector("#seta1")
let seta2=document.querySelector("#seta2")
let visualizacao=document.querySelector("#foto3");
let marcador1=document.querySelector("#marcador1");
let marcador2=document.querySelector("#marcador2");
let play=document.querySelector("#botao_play");
let avancar=document.querySelector("#trocar_video1");
let retroceder=document.querySelector("#trocar_video2");
let assistir=document.querySelector("#video")
avancar.addEventListener("click",video2)
retroceder.addEventListener("click",video)
play.addEventListener("click",comecarvideo)
seta1.addEventListener("click",anterior)
seta2.addEventListener("click",proximo)

function anterior(){

	seta2.style.opacity="1"
	seta1.style.opacity="0"
	visualizacao.src=imagens[0]
	marcador1.style.opacity="1"
	marcador2.style.opacity="0.3"
}




function proximo(){
	seta1.style.opacity="1"
	seta2.style.opacity="0"
	visualizacao.src=imagens[1]
	marcador2.style.opacity="1"
	marcador1.style.opacity="0.3"
	
	
}

function comecarvideo(){
	assistir.play()
}

function video2(){
	assistir.src=videos[1]
	retroceder.style.opacity=1
	avancar.style.opacity=0
}

function video(){
	assistir.src=videos[0]
	retroceder.style.opacity=0
	avancar.style.opacity=1
}
		
	




	

