//let condition = false;
//console.log(userNmae);
//if(userNmae == "Putin"){
//    alert('YOu are a putin guy')
//}else{
//  alert("Dum bitchass nigga")
//};

//switch(userNmae){
    //case 'Hood gangsta':
      //  alert('Dawg youre a reall hoog nigga');
      //  break;
   // case 'Idk':
     //   alert("Ok buddy");
     //   break;
   // case 'Nigga you dont know?':
      //  alert("Shut yo bitch ass up, shut yo bitchass up nigga");
      //  break;
   // default :
  //      alert('Keep on yip yapping lil nigga...');   
//}

//for(let i = 0; i < 10; i++){
  //  console.log(i * 5);
//}

//let userName = prompt('Введите своё имя!');
//while(userName != 'q'){
  //  console.log(userName);
    //userName = prompt('If you a nigga please leave this stupid stie you stupid nigger i hate you i hate you i hat you stupid nigga nigga nigga nigga');
    //alert('Look behind ou nigga');
//    if(userName == 'dog'){
  //      alert("Alright, those shoes?");
    //    continue;
    //}

 //   alert("kys lil nigga i hate you nigga niga niggigigigiigigigiii");
//    if(userName == "dick"){
  //      alert("Alright, those shoes? Wait nigga you ruined the cycle de DIE DIE DIE DEI!");
    //    break;
    //}
    
//}

// let ar = ['nigga', 'hood nigga', 'burbakah', 'robl'];
// console.log(ar.length);
// ar.push('Nigga niganovich');
// console.log(ar.length);
// console.table(ar);

let inputMany = document.getElementById('many').value;
let manySelect = document.getElementById('checkMany').value;
let outResult = document.getElementById('out');
let arr = [89, 12, 97, 0.6]  
function converter(){
    let res = inputMany * arr[manySelect -1];
    outResult.innerText = `Стоимость по курсу ${res}`;
}