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
let elSearchInp = document.querySelector(".search");
let arr = [];
let namesArr = [];
let obj = {};

elForm.addEventListener("submit", send);

elSearchInp.addEventListener("keyup", search);

function search(e){
    let elInpValue = e.target.value.toLowerCase();
    
    namesArr.forEach(item =>{
        let userName = item.textContent.toLowerCase();

        if(!userName.includes(elInpValue)){
            item.parentElement.style.display = "none";
        }
        else{
            item.parentElement.style.display = "block";
        }
    })
}

function createElement(element){
    elList.innerHTML = "";
    element.forEach(item =>{
        let elLi = document.createElement("li");
        elLi.className = "box__item border mb-3 p-3 rounded";
        let name = document.createElement("h3");
        name.className = "box__name";
        name.innerHTML = item.fullname;
        let relationship = document.createElement("p");
        relationship.className = "box__relationShip";
        relationship.innerHTML = item.relationship;
        let tel = document.createElement("a");
        tel.className = "box__tell btn btn-primary text-decoration-none fw-bold";
        tel.href = `${item.phone}`
        tel.innerHTML = item.phone;
        elLi.appendChild(name);
        elLi.appendChild(relationship);
        elLi.appendChild(tel);
        elList.append(elLi);
        namesArr.push(name);
    }) 
}

function send (e) {
    e.preventDefault();
    let userPhone = arr.filter(item => item.phone === elPhoneInp.value);
    console.log(userPhone);
    if(elNameInp.value != "" && elRealtionInp.value != "" && elPhoneInp.value != "" && userPhone.length === 0){
        obj = {
            fullname : elNameInp.value,
            relationship : elRealtionInp.value,
            phone : elPhoneInp.value
        };
        arr.push(obj);
        createElement(arr);
    }
    elAllInputs.forEach(item => item.value = "");
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



