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


// gets bill input and put it in total\
function billFunction(){

    bill.addEventListener("keyup",(e)=>{
        // totalJS.innerHTML = `${e.target.value}`;
        // console.log(e.target.value * .05)
        // console.log(e.target.value)
        billTotal = e.target.value;
        totalFunction(billTotal);
    });
};




// gets tip input
function tipFunction(){

    tipBtn.forEach((btn) =>{
        btn.addEventListener("click",()=>{
            
            // tipJS.innerHTML = `${btn.innerHTML.replace(/%/g,'')}`
            // billTip = btn.innerHTML.replace(/%/g,'');
            // tipJS.innerHTML = `${e.target.value}`
            // console.log(btn.innerHTML.replace(/%/g,""));
            billTip = btn.innerHTML.replace(/%/g,"");
            totalFunction(billTip);
    })
})
};



function peopleFunction(){

    numbOfPeople.addEventListener("keyup",(e)=>{
        console.log(e.target.value);
    });
};

billFunction();
tipFunction();
peopleFunction();

totalFunction();

function totalFunction(bill,tip){
    console.log(bill);
    totalJS.innerHTML = `\$${bill}`

}

// totalMathFunction(billFunction,tipFunction);

// function totalMathFunction(bill, tip){
//  console.log(bill && tip)
// }