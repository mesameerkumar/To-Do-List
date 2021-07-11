const inputbox = document.querySelector(".i11")
const addbtn = document.querySelector(".btn")
const todolist = document.querySelector(".todolist")
const clrbtn = document.querySelector(".clearbtn")

inputbox.onkeyup = ()=>{
    let userData = inputbox.value;
    if(userData.trim() != 0){
        addbtn.classList.add("active");
    }
    else{
        addbtn.classList.remove("active");
    }
}

showtask();

addbtn.onclick = ()=>{
    let userData = inputbox.value;
    let getLocalStorgae = localStorage.getItem("New ToDo");
    if(getLocalStorgae == null){
        la = [];
    }
    else{
        la = JSON.parse(getLocalStorgae);
    }
    la.push(userData);
    localStorage.setItem("New ToDo",JSON.stringify(la));
    showtask()
}

function showtask(){
    let getLocalStorgae = localStorage.getItem("New ToDo");
    if(getLocalStorgae == null){
        la = [];
    }
    else{
        la = JSON.parse(getLocalStorgae);
    }   
    const pennum = document.querySelector(".pennum");
    pennum.textContent=la.length; 
    if(la.length > 0){
        clrbtn.classList.add("active");
    }
    else{
        clrbtn.classList.remove("active");
    }
    let newLiTag= '';
    la.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick=" deltask(${index})";><i class="fas fa-trash"></i></span></li>`;

    });
    todolist.innerHTML = newLiTag;
    inputbox.value= "";
}

function deltask(index){
    let getLocalStorgae = localStorage.getItem("New ToDo");
    la = JSON.parse(getLocalStorgae);
    la.splice(index, 1);
    localStorage.setItem("New ToDo",JSON.stringify(la));
    showtask()
}

clrbtn.onclick =()=>{
    la = [];
    localStorage.setItem("New ToDo",JSON.stringify(la));
    showtask();
}