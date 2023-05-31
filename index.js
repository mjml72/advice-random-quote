const btnIcon = document.getElementById("btn-icon");
const advice = document.getElementById("advice");
const colors = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];


function randomColor() {
    let color = Math.floor(Math.random() * 13);
    document.body.style.backgroundColor = colors[color];
    btnIcon.style.backgroundColor = colors[color];
    advice.style.color = colors[color];
}
getData();
randomColor();

btnIcon.addEventListener("click", getData);
btnIcon.addEventListener("click", randomColor);


async function getData() {

    try{

        let response = await fetch("https://api.adviceslip.com/advice");
        let data = await response.json();
        advice.innerHTML = `"${data.slip.advice}"`;      

    }catch(error){

        console.error(error);

    }
}

