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

// let billTotal = "bill";
// let tipNumb = "tip";

// gets bill input and put it in total\
// function billFunction(){

//     bill.addEventListener("keyup",(e)=>{
//         billTotal = e.target.value;
//         console.log(billTotal)
//         totalFunction(billTotal);
//     });
// };




// gets tip input
// function tipFunction(){

//     tipBtn.forEach((btn) =>{
//         btn.addEventListener("click",()=>{
            
//             billTip = btn.innerHTML.replace(/%/g,"");
//             let tipNumb = Number(billTip * .01);
//             console.log(tipNumb);
//             totalFunction(tipNumb);

//     })
// })
// };



function peopleFunction(){

    numbOfPeople.addEventListener("keyup",(e)=>{
        console.log(e.target.value);
    });
};

// billFunction();
// tipFunction();
peopleFunction();



bill.addEventListener("keyup",()=>{

    totalAmountFunction();

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


function totalAmountFunction(){
    billTotal = bill.value;
}


function totalTipFunction(){

    tipBtn.forEach((btn) =>{
        btn.addEventListener("click",()=>{
            
            billTip = btn.innerHTML.replace(/%/g,"");
            const tipNumb = Number(billTip * .01 );
            tipJS.innerHTML = `\$${Math.round(100*billTotal * tipNumb)/100}`
            totalJS.innerHTML = `\$${parseFloat(Number(billTotal) + Math.round(100*billTotal * tipNumb)/100).toFixed(2)}`;

    })
})
};

