const length1=document.getElementById('amount');
// const length1=document.querySelector('#amount').valueOf;
console.log(length1)
const convertFrom=document.querySelector('#from');

const convertTo=document.querySelector('#to');
const result=document.querySelector('#result');

const units=[
    'Kilogram',
    'Milligram',
    'Pound',
    'Ounce'
];
const selectElm=document.querySelectorAll('select');
// console.log(selectElm)


for(let i=3;i>=0;i--){
    let option= `<option value=${units[i]}>${units[i]}</option>`;
    selectElm[0].firstElementChild.insertAdjacentHTML('afterend',option);
}

for(let i=3;i>=0;i--){
    let option=` <option value=${units[i]}>${units[i]}</option>`;
    selectElm[1].firstElementChild.insertAdjacentHTML('afterend',option);
}
function convertUnits (){
   if(
    (convertFrom.value ==='Gram') && (convertTo.value ==='Gram') ||
    (convertFrom.value ==='Milligram') && (convertTo.value ==='Milligram') ||
    (convertFrom.value ==='Kilogram') && (convertTo.value ==='Kilogram') ||
    (convertFrom.value ==='Pound') && (convertTo.value ==='Pound') ||
    (convertFrom.value ==='Ounce') && (convertTo.value ==='Ounce')
   ){
   result.value=length1.value;
   }
   else if(
    (convertFrom.value ==='Gram') && (convertTo.value ==='Kilogram')
   ){
    result.value=length1.value/1000;
   }
   else if(
    (convertFrom.value ==='Gram') && (convertTo.value ==='Milligram')
   ){
    result.value=length1.value*1000;
   }
   else if(
    (convertFrom.value ==='Gram') && (convertTo.value ==='Pound')
   ){
    result.value=length1.value/453.6;
   }
   else if(
    (convertFrom.value ==='Gram') && (convertTo.value ==='Ounce')
   ){
    result.value=length1.value/28.35;
   }
   else if(
    (convertFrom.value ==='Milligram') && (convertTo.value ==='Gram')
   ){
    result.value=length1.value/1000;
   }
   else if(
    (convertFrom.value ==='Milligram') && (convertTo.value ==='Kilogram')
   ){
    result.value=length1.value/1000000;
   }
   else if(
    (convertFrom.value ==='Milligram') && (convertTo.value ==='Ounce')
   ){
    result.value=length1.value/28350;
   }
   else if(
    (convertFrom.value ==='Milligram') && (convertTo.value ==='Pound')
   ){
    result.value=length1.value/453600;
   }
   else if(
    (convertFrom.value ==='Kilogram') && (convertTo.value ==='Gram')
   ){
    result.value=length1.value*1000;
   }
   else if(
    (convertFrom.value ==='Kilogram') && (convertTo.value ==='Milligram')
   ){
    result.value=length1.value*1000000;
   }
   else if(
    (convertFrom.value ==='Kilogram') && (convertTo.value ==='Ounce')
   ){
    result.value=length1.value*35.274;
   }
   else if(
    (convertFrom.value ==='Kilogram') && (convertTo.value ==='Pound')
   ){
    result.value=length1.value*2.205;
   }
   else if(
    (convertFrom.value ==='Pound') && (convertTo.value ==='Gram')
   ){
    result.value=length1.value*453.6;
   }
   else if(
    (convertFrom.value ==='Pound') && (convertTo.value ==='Kilogram')
   ){
    result.value=length1.value/2.205;
   }
   else if(
    (convertFrom.value ==='Pound') && (convertTo.value ==='Milligram')
   ){
    result.value=length1.value*453600;
   }
   else if(
    (convertFrom.value ==='Pound') && (convertTo.value ==='Ounce')
   ){
    result.value=length1.value*16;
   }
   else if(
    (convertFrom.value ==='Ounce') && (convertTo.value ==='Gram')
   ){
    result.value=length1.value*28.35;
   }
   else if(
    (convertFrom.value ==='Ounce') && (convertTo.value ==='Kilogram')
   ){
    result.value=length1.value/35.274;
   }
   else if(
    (convertFrom.value ==='Ounce') && (convertTo.value ==='Milligram')
   ){
    result.value=length1.value*28350;
   }
   else if(
    (convertFrom.value ==='Ounce') && (convertTo.value ==='Pound')
   ){
    result.value=length1.value/16;
   }
}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length1.addEventListener('change',convertUnits);
