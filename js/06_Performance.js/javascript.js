
// const t1 = performance.now()

// for(let i = 1; i<=100; i++) {                        // this code is taking 7 seconds
//     let para = document.createElement('p')
//     para.textContent = "This is the Para" + i;
//     document.body.appendChild(para);

//     console.log(para)
// }

// const t2 = performance.now()

// console.log("total time taken by code is :" + (t2-t1))



// const t3 = performance.now()

// let div1 = document.createElement('div')


// let div = document.getElementById('Paras')

// function alertPara(event) {

//     alert(`You clicked the para Number :`+ event.target.textContent);
// }

// div.addEventListener('click', alertPara)


let fragment = document.createDocumentFragment()    ;

for(let i = 1; i<=100; i++) {

    let para = document.createElement('p');
    para.textContent = "This is FRAGMENT DOCUMENT PARA";
    fragment.appendChild(para);
}

document.body.appendChild(fragment);