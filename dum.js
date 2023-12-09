const buttLeft = document.getElementById('left');
const buttRight = document.getElementById('right');
const buttForward = document.getElementById('forward');
const buttBack = document.getElementById('back');
let monitor = document.getElementById('mon');
let changeCar = document.getElementsByTagName('select')[0];
let imgleft = document.getElementById('lefty');
let imgright = document.getElementById('righty');
let imgup = document.getElementById('up');
let imgdown = document.getElementById('down');
let groupBtn = document.getElementById('groupBtn');
groupBtn.addEventListener('click', groupSelection);

let currTrans = 0;
if(localStorage.getItem('cur')){
    currTrans = localStorage.getItem('cur');
}

changeCar.addEventListener('change', function(){
    currTrans = changeCar.options.selectedIndex - 1;
    console.log(currTrans);
    curFolder = `${folder}${arrTrans[currTrans].path}/`;
    let path = `${curFolder}left.jpg`;
    monitor.setAttribute('src', path);
    /////////
    path = `${curFolder}left.jpg`;
    imgleft.setAttribute('src', path);
    path = `${curFolder}right.jpg`;
    imgright.setAttribute('src', path);
    path = `${curFolder}up.jpg`;
    imgup.setAttribute('src', path);
    path = `${curFolder}down.jpg`;
    imgdown.setAttribute('src', path);

    localStorage.setItem('cur', currTrans)
});

function groupSelection(e){
    console.log(e.target);
}

const folder = "img/tanks/";
const arrTrans = [{path:"logan", 
                  carName:"Логан"},
                  {path:"samosval",
                   carName:"Сальсан"},
                   {path:"t34",
                    carName:"Т34"},
                    {path:"t90",
                    carName:"ТЭ90"},
                    {path:"uaz",
                     carName:"Уазик"}];

let curFolder = `${folder}${arrTrans[currTrans].path}/`;

for(i =0; i < arrTrans.length ; i++){
let eloption = document.createElement("option");
eloption.setAttribute("value", i);
eloption.textContent = arrTrans[i].carName;
changeCar.append(eloption);
}

function runLeft(){
 console.log("Дядя нахуй пошел игра не доделана закрой сайт чушпан");
let path = `${curFolder}left.jpg`;
 monitor.setAttribute('src', path);
};
function runForward(){
    console.log("Дядя нахуй пошел игра не доделана закрой сайт чушпан");
    let path = `${curFolder}up.jpg`;
    monitor.setAttribute('src', path);
};
function runBack(){
    console.log("Дядя нахуй пошел игра не доделана закрой сайт чушпан");
    let path = `${curFolder}down.jpg`;
    monitor.setAttribute('src', path);
};
function runRight(){
    let path = `${curFolder}right.jpg`;
    monitor.setAttribute('src', path);
    console.log("Дядя нахуй пошел игра не доделана закрой сайт чушпан");

};

buttLeft.addEventListener('click', runLeft);
buttForward.addEventListener('click', runForward);
buttBack.addEventListener('click', runBack);
buttRight.addEventListener('click', runRight);

