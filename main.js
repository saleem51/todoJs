// tod list 
let divTodo = document.getElementById('td-sous-bl');
let bodyDOc = document.body;
let createdDiv = document.createElement('div');
createdDiv.classList.add('todo-insert');
let ulCreate = document.createElement('ul');
ulCreate.classList.add('list-items');
let  todoInput = document.getElementById('todo');
let addButton = document.getElementById('add-button');
let container = document.getElementById('container');
let bool;
let liTab = [];


addButton.addEventListener( 'click', (event) => {
    
    createdDiv.insertAdjacentElement('afterbegin', ulCreate );
    container.insertAdjacentElement("beforeend", createdDiv );
    let liCreate = document.createElement('li');
    liCreate.textContent = todoInput.value
    liCreate.style.marginRight = `20px`;
    ulCreate.insertAdjacentElement("beforeend", liCreate);
    let buttonDelete = document.createElement('input');
    buttonDelete.setAttribute('type', 'button');
    buttonDelete.setAttribute('value', 'X');
    buttonDelete.setAttribute('id', 'buton-sup');

    liTab.push(liCreate);
    console.log(liTab)
    bool = true;
    for (const i in liTab){
        if(bool === true) {
            let heightDiv = container.style.height;
            let divHeight = heightDiv.substr(0,3);
            let numHeight = parseInt(divHeight);
            console.log(numHeight)
            container.style.height = `${numHeight + 20}px`
            console.log(container.style.height);
        }
    }
    
    
    buttonDelete.classList.add('btn', 'btn-delete');
    liCreate.insertAdjacentElement("afterend", buttonDelete);
    

    buttonDelete.addEventListener('click', () => {
        liCreate.remove();
        buttonDelete.remove();
        liTab.pop(liCreate);
        console.log(liTab)
        bool = false;
        for (const i in liTab){
            if(bool === false) {
                let heightDivReduce = container.style.height;
                let divHeightReduce = heightDivReduce.substr(0,3);
                let numHeightReduce = parseInt(divHeightReduce);
                console.log(numHeightReduce)
                container.style.height = `${numHeightReduce - 20}px`
                console.log(container.style.height);
            }
        }
    })
})

//calcul du pourcentage

const valDepart = document.getElementById('val1');
const pourcentage = document.getElementById('val2');
const resultat = document.getElementById('val3')
const valeurfinale = document.getElementById('val4')

pourcentage.addEventListener('keyup', ()=> {
    let result = valDepart.value * (pourcentage.value/100);
    console.log(result);
    resultat.innerHTML = `${result}€` ;
    resultatFinale = valDepart.value - result;
    valeurfinale.innerHTML = `${resultatFinale}€`;
})

// cacul de l'IMC

const taille = document.getElementById('taille');
const poids = document.getElementById('poids');
const imcResult = document.getElementById('imc-result');
const submitButton = document.getElementById('imc-submit');


submitButton.addEventListener('click', ()=>{
    console.log(poids.value)
    console.log(taille.value)
    const imc = poids.value / taille.value ** 2 ;
    let imcFinale = Math.round(imc);

    if(typeof(taille == 'number') && typeof(poids == 'number')){
        imcResult.innerHTML = `Votre imc est de ${imcFinale}`;
    } else {
        imcResult.innerHTML = "";
    }
})


// Convertisseur de monnaie

const convertButton = document.getElementById('convertir');
let montant = document.getElementById('montant-euros');
let monnaieContainer = document.getElementById('monnaie-block')

let montantAConvertir = montant.value;

let changeMonnaie = [
    {
        pays : "États-unis:",
        monnaie: "dollars",
        taux : 1.1008,
        signe : '$',
        flg : 'us'
    },
    {
        pays : "Algérie:",
        monnaie: "dinars algérien",
        taux : 157.79,
        signe : 'Da',
        flg : 'dz'

    },{
        pays : "Maroc:",
        monnaie: "dirham marocain",
        taux : 10.81,
        signe : 'dir',
        flg : 'ma'
    }, {
        pays : "Chine:",
        monnaie: "yuan",
        taux : 7.04,
        signe : "Yn",
        flg : 'cn'
    }
];
let flags = ['us', 'dz','ma','cn'];

convertButton.addEventListener('click', () => {
    // console.log(montant.value);
    let monnaieUl = document.createElement('ul');
    monnaieUl.classList.add('f32');
    let liMonnaie;
    let v;
   
    for ( v in changeMonnaie) {
        // console.log(changeMonnaie[v].pays);
        // console.log(changeMonnaie[v].taux);
        // console.log(changeMonnaie[v].monnaie);
        let resultatConvertion = montant.value * changeMonnaie[v].taux;
        // console.log(resultatConvertion);
        // console.log(`${resultatConvertion} ${changeMonnaie[v].signe}`);
        let arrondi = Math.round(resultatConvertion);
        let  tauxMonnaie = document.createElement('div');
        liMonnaie = document.createElement('li');

        monnaieUl.insertAdjacentElement('afterbegin',liMonnaie);  
        tauxMonnaie.insertAdjacentElement('afterbegin', monnaieUl);
        let pFlag = document.createElement('p');
        
        
        liMonnaie.innerHTML+= `${changeMonnaie[v].pays}`;
        liMonnaie.innerHTML +=`<p class="flag ${changeMonnaie[v].flg} botflag"></p>`;
        liMonnaie.innerHTML += `<br> Taux : ${changeMonnaie[v].taux}` ;
        liMonnaie.innerHTML += `<br> Monnaie : ${changeMonnaie[v].monnaie}`;
        liMonnaie.innerHTML += `<br> Résultat : ${arrondi} ${changeMonnaie[v].signe}`;
        bodyDOc.insertAdjacentElement('beforeend',tauxMonnaie );
    };   
})

// compte à rebours

// const delai = 5;

// let times = delai * 60;
//  let chrono;

// let inter = setInterval(() => {
//     const minutes = Math.floor(times / 60);

//     let secondes = times % 60;

//     if (secondes < 10 ) {
//         secondes = `0${secondes}`
//     }

//     if (times <= 0){
//         times = 0;
//     }else {
//         times = times - 1
//     }
//     chrono = `${minutes} :${secondes}`;
//     console.log(chrono)
//     if(minutes <= 0 && secondes <= 0){
//         clearInterval(inter);
//     }
// }, 1000);



// const rebours = document.createElement('div');

// bodyDOc.insertAdjacentElement('beforeend', rebours);

// inter = "";

// clearInterval();
//

