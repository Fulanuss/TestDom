// LES BOUTONS PLUS ET MOINS

const plus=document.getElementsByClassName('btn-plus');
const moins=document.getElementsByClassName('btn-moins');
const valeur=document.getElementsByClassName('num');
let a=1;
for(let i=0; i< plus.length;i++){
    let btnPlus=plus[i];
    let btnValeur=valeur[i];
    btnPlus.addEventListener('click', function(){
    a++;
    a=(a<10) ? "0" + a: a;
    btnValeur.innerText=a;
    console.log(a);
    })
    let btnMoins=moins[i];
    btnMoins.addEventListener('click', function(){
        if(a>1){
        a--;
        a=(a<10) ? "0" + a: a;
        btnValeur.innerText=a;
    }
        })
}

// METTRE EN FAVORI

const icone=document.getElementsByClassName('icone');
for(let i=0; i<icone.length;i++){
    let heart=icone[i];
    heart.addEventListener('click', function(){
        heart.classList.toggle('favori');
    })
}

// IMPLEMENTER BOUTON SUPPRIMER

let btnRemove=document.getElementsByClassName('btn-remove');
let article=document.getElementsByClassName('article');
let prixArticle=document.getElementsByClassName('price');
let quantity=document.getElementsByClassName('quantity');
for(let i=0; i<btnRemove.length; i++){
    let btnSup=btnRemove[i];
    let articleSup=article[i];
    let priceSup=prixArticle[i];
    let quantitySup=quantity[i];
    btnSup.addEventListener('click', function(){
    articleSup.classList.toggle('deletArticle');
    priceSup.classList.toggle('deletArticle');
    quantitySup.classList.toggle('deletArticle');
    }) 
}

// LIER LES PRIX AUX BOUTONS PLUS ET MOINS

let price=document.getElementsByClassName('value');
for(let i=0; i<price.length;i++){
    let prixArticle=price[i];
    let btnPlus=plus[i];
    let btnMoins=moins[i];
    let n=5000
    btnPlus.addEventListener('click', function(){
    n= n + 5000;
    prixArticle.innerText=n;
    console.log(n);
    }) 
    btnMoins.addEventListener('click', function(){
        if(n>5000){
            n=n-5000;
            prixArticle.innerText=n;
        }
    })  
}