let elForm = document.querySelector(".form");
let elBoxList = document.querySelector(".box__list");
let elNameInp = document.querySelector(".inp-name");
let elRelationshipInp = document.querySelector(".inp-relationship");
let elPhoneInp = document.querySelector(".inp-phone");
let elAllInputs = document.querySelectorAll(".inputs");
let elFamilyBtn = document.querySelector(".family-btn");
let elFriendsBtn = document.querySelector(".friends-btn");
let elClassMateBtn = document.querySelector(".classmate-btn");
let elAllBtn = document.querySelector(".all-btn");
let elSearchInp = document.querySelector(".search");
let names = [];
let arr = [];

elForm.addEventListener("submit", send);
elFamilyBtn.addEventListener("click", familySort);
elFriendsBtn.addEventListener("click", friendsSort);
elClassMateBtn.addEventListener("click", classmate);
elAllBtn.addEventListener("click", allsort);
elSearchInp.addEventListener("keyup", search);

function send(e){
    e.preventDefault()
    if(elPhoneInp.value != "" && elRelationshipInp.value != "" && elNameInp.value != ""){
        let obj = {
            fullName: elNameInp.value,
            phonenumber: elPhoneInp.value,
            relationship: elRelationshipInp.value,
        };
        arr.push(obj);
        let elItem = document.createElement("li");
        let elName = document.createElement("h3");
        let elRelationShip = document.createElement("p");
        let elTell = document.createElement("a");
        elTell.href = `tel:${elPhoneInp.value}`;
        elItem.className = "box__item border mb-3 p-3 rounded";
        elBoxList.appendChild(elItem);
        elName.className = "box__name";
        elName.innerHTML = obj.fullName;
        elItem.appendChild(elName);
        elRelationShip.className = "box__relationShip";
        elRelationShip.innerHTML = obj.relationship;
        elItem.appendChild(elRelationShip);
        elTell.className = "box__tell btn btn-primary text-decoration-none fw-bold";
        elTell.innerHTML = obj.phonenumber;
        names.push(elName);
        elItem.appendChild(elTell);
    }
    
    elAllInputs.forEach(function (item){
        item.value = "";
    })
}

function search(e){
    let inpText = e.target.value.toLowerCase();

    Array.from(names).forEach(function(item){
        let itemText = item.textContent;

        if(itemText.toLowerCase().includes(inpText) != 1){
            item.parentElement.style.display = "none";
            console.log("awd");
        }
        else{
            item.parentElement.style.display = "block";
        }
    })


}

function friendsSort(e){
    elBoxList.innerHTML = "";
    arr.forEach(function(item){
        if(item.relationship.toLowerCase() == "friends"){
            let elItem = document.createElement("li");
            let elName = document.createElement("h3");
            let elRelationShip = document.createElement("p");
            let elTell = document.createElement("a");
            elTell.href = `tel:${elPhoneInp.value}`;
            elItem.className = "box__item border mb-3 p-3 rounded";
            elBoxList.appendChild(elItem);
            elName.className = "box__name";
            elName.innerHTML = item.fullName;
            elItem.appendChild(elName);
            elRelationShip.className = "box__relationShip";
            elRelationShip.innerHTML = item.relationship;
            elItem.appendChild(elRelationShip);
            elTell.className = "box__tell btn btn-primary text-decoration-none fw-bold";
            elTell.innerHTML = item.phonenumber;
            names.push(elName);
            elItem.appendChild(elTell);
        }
    })
}

function familySort(e){
    elBoxList.innerHTML = "";
    arr.forEach(function(item) {
        if(item.relationship.toLowerCase() == "family"){
            let elItem = document.createElement("li");
            let elName = document.createElement("h3");
            let elRelationShip = document.createElement("p");
            let elTell = document.createElement("a");
            elTell.href = `tel:${elPhoneInp.value}`;
            elItem.className = "box__item border mb-3 p-3 rounded";
            elBoxList.appendChild(elItem);
            elName.className = "box__name";
            elName.innerHTML = item.fullName;
            elItem.appendChild(elName);
            elRelationShip.className = "box__relationShip";
            elRelationShip.innerHTML = item.relationship;
            elItem.appendChild(elRelationShip);
            elTell.className = "box__tell btn btn-primary text-decoration-none fw-bold";
            elTell.innerHTML = item.phonenumber;
            names.push(elName);
            elItem.appendChild(elTell);
        }
    })
}

function classmate(e){
    elBoxList.innerHTML = "";
    arr.forEach(function(item) {
        if(item.relationship.toLowerCase() == "classmate"){
            let elItem = document.createElement("li");
            let elName = document.createElement("h3");
            let elRelationShip = document.createElement("p");
            let elTell = document.createElement("a");
            elTell.href = `tel:${elPhoneInp.value}`;
            elItem.className = "box__item border mb-3 p-3 rounded";
            elBoxList.appendChild(elItem);
            elName.className = "box__name";
            elName.innerHTML = item.fullName;
            elItem.appendChild(elName);
            elRelationShip.className = "box__relationShip";
            elRelationShip.innerHTML = item.relationship;
            elItem.appendChild(elRelationShip);
            elTell.className = "box__tell btn btn-primary text-decoration-none fw-bold";
            elTell.innerHTML = item.phonenumber;
            names.push(elName);
            elItem.appendChild(elTell);
        }
    })
}

function allsort(e){
    elBoxList.innerHTML = "";
    arr.forEach(function(item) {
        let lowerText = item.relationship.toLowerCase();
        if(lowerText == "classmate" || lowerText == "family" || lowerText == "friends"){
            console.log("awdawd");
            let elItem = document.createElement("li");
            let elName = document.createElement("h3");
            let elRelationShip = document.createElement("p");
            let elTell = document.createElement("a");
            elTell.href = `tel:${elPhoneInp.value}`;
            elItem.className = "box__item border mb-3 p-3 rounded";
            elBoxList.appendChild(elItem);
            elName.className = "box__name";
            elName.innerHTML = item.fullName;
            elItem.appendChild(elName);
            elRelationShip.className = "box__relationShip";
            elRelationShip.innerHTML = item.relationship;
            elItem.appendChild(elRelationShip);
            elTell.className = "box__tell btn btn-primary text-decoration-none fw-bold";
            elTell.innerHTML = item.phonenumber;
            names.push(elName);
            elItem.appendChild(elTell);
        }
    })
}

