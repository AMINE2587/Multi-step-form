

let nextBtn1 = document.getElementById('next-btn');
let nextBtn2 = document.getElementById('next-btn2');
let nextBtn3 = document.getElementById('next-btn3');
let fullName = document.getElementById('name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phone');

let firstDisplay = document.getElementById('personal-info');
let secondDisplay = document.getElementById('select-plan');
let thirdDisplay = document.getElementById('add-ons');
let forDisplay = document.getElementById('finishing-up');
let result = document.getElementById('place-change');

let back1 = document.getElementById('back');






let userInfo = [];
let steps = [];








function saveData(){

    if(fullName.value.trim() !== "" &&
       email.value.trim() !== "" && 
       phoneNumber.value.trim() !== "" &&
       phoneNumber.value.trim().length >= 8 )
       {
        let user = {
            fullname: fullName.value.trim(),
            email: email.value.trim(),
            phone: phoneNumber.value.trim(),
        };

        userInfo.push(user);
        localStorage.setItem('info', JSON.stringify(userInfo));
        firstDisplay.style.display = 'none';
        secondDisplay.style.display = 'block';
       }else{
        alert("please complete the informations")
       };

}

function selectPlan(){
     let plan1 = document.getElementById('plan1');
     let plan2 = document.getElementById('plan2');
     let plan3 = document.getElementById('plan3');

     plan1.addEventListener('click', function(){
        plan1.style.background = '#ecf4ff';
        plan1.style.border = '#072757 solid 1.5px';
        plan2.style.background = 'none';
        plan2.style.border = 'silver 1.5px solid';
        plan3.style.background = 'none';
        plan3.style.border = 'silver 1.5px solid';
     });
     plan2.addEventListener("click", function(){
        plan2.style.background = '#ecf4ff';
        plan2.style.border = '#072757 solid 1.5px';
        plan1.style.background = 'none';
        plan1.style.border = 'silver 1.5px solid';
        plan3.style.background = 'none';
        plan3.style.border = 'silver 1.5px solid';
     });
     plan3.addEventListener("click", function(){
        plan3.style.background = '#ecf4ff';
        plan3.style.border = '#072757 solid 1.5px';
        plan1.style.background = 'none';
        plan1.style.border = 'silver 1.5px solid';
        plan2.style.background = 'none';
        plan2.style.border = 'silver 1.5px solid';
     })
}

let planInformations = [];


function planSelected(){
    let type = document.getElementById('select');
    let plan1 = document.getElementById('plan1');
    let plan2 = document.getElementById('plan2');
    let plan3 = document.getElementById('plan3');

    if(type.value !== "" &&
       plan1.style.background !=  'none' 
     )
     {
         let planInfo = {
            plan: "arcade",
            type: type.value,
         }
     planInformations.push(planInfo);
     localStorage.setItem('planInfo', JSON.stringify(planInformations));

     secondDisplay.style.display = 'none';
     thirdDisplay.style.display = 'block';

     }else if(type.value !== "" &&
       plan2.style.background != 'none'){
       
        let planInfo = {
            plan: "advanced",
            type: type.value,
         }
         planInformations.push(planInfo);
         localStorage.setItem('planInfo', JSON.stringify(planInformations));
         secondDisplay.style.display = 'none';
         thirdDisplay.style.display = 'block';

     } else if(type.value !== "" &&
       plan3.style.background != 'none'
       ){
           let planInfo = {
            plan: "pro",
            type: type.value,
         }
         planInformations.push(planInfo);
         localStorage.setItem('planInfo', JSON.stringify(planInformations));
         secondDisplay.style.display = 'none';
         thirdDisplay.style.display = 'block';
       }else{
        alert('please complete the informations');
       };
     

};

function getData(){
    if(localStorage.planInfo != null
    )
    {
        let get = localStorage.getItem('info', JSON.parse(planInfo));
        
        result.innerHTML = get.plan;
    }else{
        return;
    }
}









let onsInfo = [];

function addOns(){
     let checkOne = document.getElementById('check1');
     let checkTwo = document.getElementById('check2');
     let checkThird = document.getElementById('check3');


     if(checkOne.hasAttribute('checked')){
        let ons = {
            type: 'Online service',
        }

        onsInfo.push(ons);
        localStorage.setItem('onsInfo', JSON.stringify(onsInfo));
        thirdDisplay.style.display = 'none';
        forDisplay.style.display = 'block';
        
     }else if(checkTwo.hasAttribute('checked')){
        let ons = {
            type: 'Large storage',
        }
        onsInfo.push(ons);
        localStorage.setItem('onsInfo', JSON.stringify(onsInfo));
        thirdDisplay.style.display = 'none';
        forDisplay.style.display = 'block';
     }else if(checkThird.hasAttribute('checked')){
        let ons = {
            type: 'Customizable Profile',
        }
        onsInfo.push(ons);
        localStorage.setItem('onsInfo', JSON.stringify(onsInfo));
        thirdDisplay.style.display = 'none';
        forDisplay.style.display = 'none';
     }else if(checkOne.hasAttribute('checked') &&
              checkTwo.hasAttribute('checked') &&
              checkThird.hasAttribute('checked')
               )
               {
                let ons = {
                    type: 'all types',
                }
                onsInfo.push(ons);
                localStorage.setItem('onsInfo', JSON.stringify(onsInfo));
                thirdDisplay.style.display = 'none';
                forDisplay.style.display = 'block';
               }
               else{
                 alert('please chose');
               }
}




function chosingAgain(){
    let change = document.getElementById('change');
    let result = document.getElementById('place-change');
    if(change.value != ""){
       result.innerHTML = change.value;
    }else{
        return;
    }
}

nextBtn1.addEventListener('click', function(){
    saveData();
});

function backFisrt(){
    firstDisplay.style.display = 'block';
    secondDisplay.style.display = 'none';
}
function backSecond(){
    thirdDisplay.style.display = 'none';
    secondDisplay.style.display = 'block';
}
function backThird(){
    forDisplay.style.display = 'none';
    thirdDisplay.style.display = 'block';
}

addEventListener('input', chosingAgain);

chosingAgain();
selectPlan();
getData();