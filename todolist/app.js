const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container")

function addTask(){
    if(inputBox.value === ''){
        alert("You have to write something!!")
    }else{

        let li = document.createElement('li');//if write something successfully, create 'li'
        li.innerHTML = inputBox.value;//let li.value equal to the input.value
        listContainer.appendChild(li);
        let span = document.createElement('span');//create span to make a closing-btn
        span.innerHTML = ("\u00d7");
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}
//there will be two btn function, 1.checked/finished 2.close/deleted
//use if/else to make sure which one is clicking now
//target the 'li' and 'span' elements to achieve the effect
//save Data is to save it on the localStorage, even you close the browers
//next time you opened up , it still there.
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
};

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
};
showData();