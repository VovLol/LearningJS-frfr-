let btn = document.getElementById('top');
let shablom = document.getElementById('fnode');
let canv = document.getElementById('topchick');
btn.addEventListener('click', loadFoto)
function loadFoto(){
    fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20').then(result=> result.json())
    .then( res => res.photos).then(a =>{ 
            let arr=[];
            let b = a[0];
            for(let i=0; i < 10; i++){
              arr.push(a[i].url);
              
    }
    return arr
    }
    
    ).then(b =>{
        for(let i = 0; i < 10; i++){
        let foto = shablom.content.cloneNode(true);
        foto.getElementById('ft').setAttribute('src', b[i]);
        console.log(b[i]);
        canv.appendChild(foto);
    }

    } );

}