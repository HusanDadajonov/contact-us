let elNameInp = document.querySelector(".inp-name");
let elRealtionInp = document.querySelector(".inp-relationship");
let elPhoneInp = document.querySelector(".inp-phone");
let elForm = document.querySelector(".form");
let elAllInputs = document.querySelectorAll(".inputs");
let elList = document.querySelector(".box__list");
let elFamilyBtn = document.querySelector(".family-btn");
let elFriendsBtn = document.querySelector(".friends-btn");
let elClassMate = document.querySelector(".classmate-btn");
let elAllBtn = document.querySelector(".all-btn");
let arr = [];
let phones = [];
let obj = {};

elForm.addEventListener("submit", send);

function createElement(element){
    elList.innerHTML = "";
    element.forEach(item =>{
        let elLi = document.createElement("li");
        elLi.className = "box__item border mb-3 p-3 rounded";
        elLi.innerHTML = `<h3 class="box__name">${item.fullname}</h3><p class="box__relationShip">${item.relationship}</p><a class="box__tell btn btn-primary text-decoration-none fw-bold" href = ${item.phone}>${item.phone}</a>`;
        elList.append(elLi);
    }) 
}

function send (e) {
    e.preventDefault();
    if(obj.phone != elPhoneInp.value){
        if(elNameInp.value != "" && elRealtionInp.value != "" && elPhoneInp.value != ""){
            obj = {
                fullname : elNameInp.value,
                relationship : elRealtionInp.value,
                phone : elPhoneInp.value
            };
            arr.push(obj);
            createElement(arr);
        }
    }
    else alert(`${elPhoneInp.value} nomer ro'yxatdan o'tgan`);
    elAllInputs.forEach(item => item.value = "");
}

function sortFamily(arrays){
    console.log(arrays);
}

elFamilyBtn.addEventListener("click", (e) =>{
    let familyArr = [];
    arr.forEach(item =>{
        if(item.relationship == "Family"){
            familyArr.push(item);  
            createElement(familyArr);
        }
    })
    
})

elFriendsBtn.addEventListener("click", (e) =>{
    let friendsArr = [];
    arr.forEach(item =>{
        if(item.relationship == "Friends"){
            friendsArr.push(item);  
            createElement(friendsArr);
        }
    })
    
})

elClassMate.addEventListener("click", (e) =>{
    let classMateArr = [];
    arr.forEach(item =>{
        if(item.relationship == "Classmate"){
            classMateArr.push(item);  
            createElement(classMateArr);
        }
    })
    
})

elAllBtn.addEventListener("click", (e) =>{
    createElement(arr);
})