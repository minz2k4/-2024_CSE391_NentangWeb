//tu document lam moi tu lien quan trong may
/*let main :HTMLElement document.getElementById(element: 'main');
console.log(main.innerHTML);
main.children[0].textContent = "New garagraph";
main.children[2].style.color = 'red';
main.children[2].style.backgroundColor = 'yellow';

//console.log(main.attributes);
//xoa node
let childToRemove :Element = main.children[0].nextElementSibling;
main.removeChild(childToRemove);


//them node moi
let newElement : HTMLHeadElementc = document.createElement(tagName: 'h1');
newElement.textContent='Hedding';
newElement.style.color = 'pink';
newElement.style.backgroundColor='black';
newElement.style.fontSize='40px';

main.appendChild(newElement);*/
let textFruit = document.getElementById("textFruit");
let btnSearch = document.getElementById("btnSearch");
let notify = document.getElementById("notify");
let imgView = document.getElementById("imgView");
// xu ly su kien
btnSearch.addEventListener("click", doSomeThing)

//ham xu ly su kien
function doSomeThing(e) {
    //ngan chan su kien cua form submit mac dinh
    // truyen e tham so vao doSomeThing
    e.preventDefault()
    let fruit = textFruit.value;
    if(fruit == ''){
        textFruit.focus();
        textFruit.style.border='5px solid red';
        textFruit.placeholder="Please enter the fruit";

    }else{
        if(!fruitsDB.includes(fruit)){
            pNotify.textContent = 'The' + 'fruit' + 'not exist';
            pNotify.style.color = 'red';
            pNotify.style.backgroudColor = 'yellow';

        }

    }else{
        pNotify.textContent = fruit;
        pNotify.style.textTransform = 'uppercase';
        imgView.src = 'images/'+fruit+'.jpg';
    }
}
