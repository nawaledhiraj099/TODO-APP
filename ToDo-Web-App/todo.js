localStorage.setItem("super","thor")
var ul =document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click',removeAllItem);

function removeAllItem(){
    for(let i = ul.children.length - 1; i >= 0; i--) {
        ul.removeChild(ul.children[i])
    }
}

function removeItem(){
    li = ul.children;
    for(let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
}

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    var textnode = document.createTextNode(item);

    if (item === '') {
        return false;
        //add a p tag and assign a value of enter your todo
    } else {
        li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        var label = document.createElement('label');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(()=> {
            li.className = 'visual';
        },2)
        input.value = ''; 
    }
}