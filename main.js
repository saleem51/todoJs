let divTodo = document.getElementById('td-sous-bl');
let bodyDOc = document.body;
let createdDiv = document.createElement('div');
console.log(createdDiv);
createdDiv.classList.add('todo-insert');
let ulCreate = document.createElement('ul');
ulCreate.classList.add('list-items');
let  todoInput = document.getElementById('todo');
let addButton = document.getElementById('add-button');


addButton.addEventListener( 'click', (event) => {
    
    createdDiv.insertAdjacentElement('afterbegin', ulCreate );
    bodyDOc.insertAdjacentElement("afterend", createdDiv );
    let liCreate = document.createElement('li');
    liCreate.textContent = todoInput.value
    ulCreate.insertAdjacentElement("beforeend", liCreate);

    let buttonDelete = document.createElement('input');
    buttonDelete.setAttribute('type', 'button');
    buttonDelete.setAttribute('value', 'supprimer');
    buttonDelete.setAttribute('id', 'buton-sup');

    
    buttonDelete.classList.add('btn', 'btn-delete');
    liCreate.insertAdjacentElement("afterend", buttonDelete);

    buttonDelete.addEventListener('click', () => {
        console.log('je peux cliquer');
        liCreate.textContent = '';
        
    })

})
