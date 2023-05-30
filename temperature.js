const length1=document.getElementById('amount');
// const length1=document.querySelector('#amount').valueOf;
console.log(length1)
const convertFrom=document.querySelector('#from');

const convertTo=document.querySelector('#to');
const result=document.querySelector('#result');

const units=[
    'Kelvin',
    'Fahrenheit'
];
const selectElm=document.querySelectorAll('select');
// console.log(selectElm)


for(let i=1;i>=0;i--){
    let option= `<option value=${units[i]}>${units[i]}</option>`;
    selectElm[0].firstElementChild.insertAdjacentHTML('afterend',option);
}

for(let i=1;i>=0;i--){
    let option=` <option value=${units[i]}>${units[i]}</option>`;
    selectElm[1].firstElementChild.insertAdjacentHTML('afterend',option);
}
function convertUnits (){
   if(
    (convertFrom.value ==='Celsius') && (convertTo.value ==='Celsius') ||
    (convertFrom.value ==='Kelvin') && (convertTo.value ==='Kelvin') ||
    (convertFrom.value ==='Fahrenheit') && (convertTo.value ==='Fahrenheit') 
   
   ){
   result.value=length1.value;
   }
   else if(
    (convertFrom.value ==='Celsius') && (convertTo.value ==='Fahrenheit')
   ){
    result.value=(length1.value*9/5)+32;
   }
   else if(
    (convertFrom.value ==='Celsius') && (convertTo.value ==='Kelvin')
   ){
    result.value=parseFloat(length1.value)+273.15;
   }
   else if(
    (convertFrom.value ==='Kelvin') && (convertTo.value ==='Fahrenheit')
   ){
    result.value=(length1.value-273.15)*9/5 + 32;
   }
   else if(
    (convertFrom.value ==='Kelvin') && (convertTo.value ==='Celsius')
   ){
    result.value=parseFloat(length1.value)-273.15;
   }
   else if(
    (convertFrom.value ==='Fahrenheit') && (convertTo.value ==='Kelvin')
   ){
    result.value=(length1.value- 32)*5/9 + 273.15;
   }
   else if(
    (convertFrom.value ==='Fahrenheit') && (convertTo.value ==='Celsius')
   ){
    result.value=(length1.value-32)*5/9;
   }  
}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length1.addEventListener('change',convertUnits);
