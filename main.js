// all fields need to be filled
// numbers can only reach 2 decimeal places
// numbers can only input numbers and 1 period
// do math based on % button
// bill / people * percent = tip
// (bill / numbOfPeople) + (percent * (bill/numb0People)) = total
// if any interaction remove disable from reset
// reset button sets all fields to inital

const bill = document.querySelector("#bill");
const totalJS = document.querySelector("#total-js");
const tipJS = document.querySelector("#tip-js");
const tipBtn = document.querySelectorAll(".tip-btn");
const numbOfPeople = document.querySelector("#number-people");


function peopleFunction(){

    numbOfPeople.addEventListener("keyup",(e)=>{
    const numbPeopleAmount = `${Number(e.target.value)}`;
    numbPeopleAmount.innerHTML = `${numbOfPeople}`;

    if(bill.value > 0){
        const tipNumb = Number(billTip * .01 );

        tipJS.innerHTML = `\$${parseFloat((billTotal * tipNumb) / Number(numbPeopleAmount)).toFixed(2)}`
        totalJS.innerHTML =`\$${parseFloat((Number(billTotal) + (billTotal * tipNumb)) / Number(numbPeopleAmount)).toFixed(2)}`
    }

    });
};

bill.addEventListener("keyup",()=>{
    
    totalAmountFunction();
    peopleFunction();



    totalJS.innerHTML = `\$${billTotal}`
    if(totalJS.innerHTML === "$"){
        totalJS.innerHTML = "$0.00"
    } 

    if(bill.value > 0){
        totalTipFunction();
    } else {
        totalJS.innerHTML = "$0.00"
    }

})

// peopleFunction();

function totalAmountFunction(){
    billTotal = bill.value;
}


function totalTipFunction(){

    tipBtn.forEach((btn) =>{
        btn.addEventListener("click",()=>{

            billTip = btn.innerHTML.replace(/%/g,"");
            const tipNumb = Number(billTip * .01 );
            const numbPeopleAmount = Number(numbOfPeople.value);
            tipJS.innerHTML = `\$${parseFloat((billTotal * tipNumb) / Number(numbPeopleAmount)).toFixed(2)}`
            totalJS.innerHTML =`\$${parseFloat((Number(billTotal) + (billTotal * tipNumb)) / Number(numbPeopleAmount)).toFixed(2)}`

        })
    })
};
