const length1=document.getElementById('amount');
// const length1=document.querySelector('#amount').valueOf;
console.log(length1)
const convertFrom=document.querySelector('#from');

const convertTo=document.querySelector('#to');
const result=document.querySelector('#result');

const units=[
    'Dollar','Euro','Pound'
];
const selectElm=document.querySelectorAll('select');
// console.log(selectElm)


for(let i=2;i>=0;i--){
    let option= `<option value=${units[i]}>${units[i]}</option>`;
    selectElm[0].firstElementChild.insertAdjacentHTML('afterend',option);
}

for(let i=2;i>=0;i--){
    let option=` <option value=${units[i]}>${units[i]}</option>`;
    selectElm[1].firstElementChild.insertAdjacentHTML('afterend',option);
}
function convertUnits (){
   if(
    (convertFrom.value ==='Rupee') && (convertTo.value ==='Rupee') ||
    (convertFrom.value ==='Dollar') && (convertTo.value ==='Dollar') ||
    (convertFrom.value ==='Pound') && (convertTo.value ==='Pound') ||
    (convertFrom.value ==='Euro') && (convertTo.value ==='Euro') 
   ){
   result.value=length1.value;
   }
   else if(
    (convertFrom.value ==='Rupee') && (convertTo.value ==='Dollar')
   ){
    result.value=length1.value*0.012;
   }
   else if(
    (convertFrom.value ==='Rupee') && (convertTo.value ==='Pound')
   ){
    result.value=length1.value*0.0098;
   }
   else if(
    (convertFrom.value ==='Rupee') && (convertTo.value ==='Euro')
   ){
    result.value=length1.value*0.0112894;
   }
   else if(
    (convertFrom.value ==='Dollar') && (convertTo.value ==='Rupee')
   ){
    result.value=length1.value*82.58;
   }
   else if(
    (convertFrom.value ==='Dollar') && (convertTo.value ==='Pound')
   ){
    result.value=length1.value*0.81;
   }
   else if(
    (convertFrom.value ==='Dollar') && (convertTo.value ==='Euro')
   ){
    result.value=length1.value*0.93;
   }
   else if(
    (convertFrom.value ==='Pound') && (convertTo.value ==='Dollar')
   ){
    result.value=length1.value*1.23;
   }
   else if(
    (convertFrom.value ==='Pound') && (convertTo.value ==='Rupee')
   ){
    result.value=length1.value*101.94;
   }
   else if(
    (convertFrom.value ==='Pound') && (convertTo.value ==='Euro')
   ){
    result.value=length1.value*1.15;
   }
   else if(
    (convertFrom.value ==='Euro') && (convertTo.value ==='Dollar')
   ){
    result.value=length1.value*1.07;
   }
   else if(
    (convertFrom.value ==='Euro') && (convertTo.value ==='Pound')
   ){
    result.value=length1.value*0.87;
   }
   else if(
    (convertFrom.value ==='Euro') && (convertTo.value ==='Rupee')
   ){
    result.value=length1.value*88.60;
   }
  
}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length1.addEventListener('change',convertUnits);
