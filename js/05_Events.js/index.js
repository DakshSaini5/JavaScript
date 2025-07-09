// function changeText() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello this is Daksh Saini";
//  }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText( ));



// function Daksh(){
//     let heading1 = document.getElementById('heading1');
//     heading1.textContent = "learning JAVASCRIPT";
// }

// let heading1 = document.getElementById('heading1');

// heading1.addEventListener('hover', Daksh);
// heading1.removeEventListener(f);




let mydiv = document.getElementById('div3');

function divPara(event){
    alert("You Have Clicked the : "+ event.target.textContent);
}

mydiv.addEventListener('click', divPara);
