let header = document.getElementsByTagName('header');
let main = document.getElementsByTagName('main');
let windowHeight = window.innerHeight;
let headerHeight = header[0].offsetHeight;

let heightAdjustmentMain = windowHeight - headerHeight; 
heightAdjustmentMain = heightAdjustmentMain.toString() + 'px'; 

main[0].style.setProperty('height', heightAdjustmentMain, 'important');
console.log({
    windowHeight,
    headerHeight, 
    heightAdjustmentMain
})

//Haciendo que los botones funcionen con encapsulamiento
let button_1,button_2,button_3;
button_1 = document.querySelector('#button_1');
button_2 = document.querySelector('#button_2');
button_3 = document.querySelector('#button_3');

button_1.addEventListener('click', clickUno);
button_2.addEventListener('click', clickDos);
button_3.addEventListener('click', clickTres);

function clickUno(){
    let btn1Url = 'http://127.0.0.1:5500/index.html';
    function goPage(btn1Url){
        window.location.href = btn1Url;
    }
    return goPage(btn1Url);
}

function clickDos(){
    let btn2Url = 'http://127.0.0.1:5500/perfil.html';
    function goPage(btn2Url){
        window.location.href = btn2Url;
    }
    return goPage(btn2Url);
}

function clickTres(){
    let btn3Url = 'http://127.0.0.1:5500/blogs.html';
    function goPage(btn3Url){
        window.location.href = btn3Url;
    }
    return goPage(btn3Url);
}



