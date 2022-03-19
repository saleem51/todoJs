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


