const buttLeft = document.getElementById('left');
const buttRight = document.getElementById('right');
const buttForward = document.getElementById('forward');
const buttBack = document.getElementById('back');
let monitor = document.getElementById('mon');
const folder = "img/tanks/";
const arrTrans = ["logan", "samosval", "t34", "t90", "uaz"];
let currTrans = 4;

function runLeft(){
 console.log("Дядя нахуй пошел игра не доделана закрой сайт чушпан");
 let path = `${folder}${arrTrans[currTrans]}/left.jpg`
 monitor.setAttribute('src', path);
};
function runForward(){
    console.log("Дядя нахуй пошел игра не доделана закрой сайт чушпан");
    let path = `${folder}${arrTrans[currTrans]}/up.jpg`
    monitor.setAttribute('src', path);
};
function runBack(){
    console.log("Дядя нахуй пошел игра не доделана закрой сайт чушпан");
    let path = `${folder}${arrTrans[currTrans]}/down.jpg`
    monitor.setAttribute('src', path);
};
function runRight(){
    let path = `${folder}${arrTrans[currTrans]}/right.jpg`
    monitor.setAttribute('src', path);
    console.log("Дядя нахуй пошел игра не доделана закрой сайт чушпан");

};

buttLeft.addEventListener('click', runLeft);
buttForward.addEventListener('click', runForward);
buttBack.addEventListener('click', runBack);
buttRight.addEventListener('click', runRight);

