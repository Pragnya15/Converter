const length1=document.getElementById('amount');
// const length1=document.querySelector('#amount').valueOf;
console.log(length1)
const convertFrom=document.querySelector('#from');

const convertTo=document.querySelector('#to');
const result=document.querySelector('#result');

const units=[
    'Cubic_Meter','Cubic_Millimeter','Milliliter','Gallon'
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
    (convertFrom.value ==='Cubic_Meter') && (convertTo.value ==='Cubic_Meter') ||
    (convertFrom.value ==='Liter') && (convertTo.value ==='Liter') ||
    (convertFrom.value ==='Milliliter') && (convertTo.value ==='Milliliter')||
    (convertFrom.value ==='Cubic_Millimeter') && (convertTo.value ==='Cubic_Millimeter')||
    (convertFrom.value ==='Gallon') && (convertTo.value ==='Gallon')
   ){
   result.value=length1.value;
   }
   else if(
    (convertFrom.value ==='Liter') && (convertTo.value ==='Cubic_Meter')
   ){
    result.value=length1.value/1000;
   }
   else if(
    (convertFrom.value ==='Liter') && (convertTo.value ==='Cubic_Millimeter')
   ){
    result.value=length1.value*1000000;
   }
   else if(
    (convertFrom.value ==='Liter') && (convertTo.value ==='Milliliter')
   ){
    result.value=length1.value*1000;
   }
   else if(
    (convertFrom.value ==='Liter') && (convertTo.value ==='Gallon')
   ){
    result.value=length1.value/3.785;
   }
   else if(
    (convertFrom.value ==='Cubic_Meter') && (convertTo.value ==='Liter')
   ){
    result.value=length1.value*1000;
   }
   else if(
    (convertFrom.value ==='Cubic_Meter') && (convertTo.value ==='Cubic_Milliliter')
   ){
    result.value=length1.value*1000000000;
   }
   else if(
    (convertFrom.value ==='Cubic_Meter') && (convertTo.value ==='Milliliter')
   ){
    result.value=length1.value*1000000;
   }
   else if(
    (convertFrom.value ==='Cubic_Meter') && (convertTo.value ==='Gallon')
   ){
    result.value=length1.value*264.2;
   }
   else if(
    (convertFrom.value ==='Cubic_Millimeter') && (convertTo.value ==='Cubic_Meter')
   ){
    result.value=length1.value*0.000000001;
   }
   else if(
    (convertFrom.value ==='Cubic_Millimeter') && (convertTo.value ==='Liter')
   ){
    result.value=length1.value*0.000001;
   }
   else if(
    (convertFrom.value ==='Cubic_Millimeter') && (convertTo.value ==='Milliliter')
   ){
    result.value=length1.value/1000;
   }
   else if(
    (convertFrom.value ==='Cubic_Millimeter') && (convertTo.value ==='Gallon')
   ){
    result.value=length1.value*0.00000026;
   }
   else if(
    (convertFrom.value ==='Milliliter') && (convertTo.value ==='Cubic_Meter')
   ){
    result.value=length1.value/1000000;
   }
   else if(
    (convertFrom.value ==='Milliliter') && (convertTo.value ==='Cubic_Millimeter')
   ){
    result.value=length1.value*1000;
   }
   else if(
    (convertFrom.value ==='Milliliter') && (convertTo.value ==='Liter')
   ){
    result.value=length1.value/1000;
   }
   else if(
    (convertFrom.value ==='Milliliter') && (convertTo.value ==='Gallon')
   ){
    result.value=length1.value/3785;
   }
   else if(
    (convertFrom.value ==='Gallon') && (convertTo.value ==='Cubic_Meter')
   ){
    result.value=length1.value/264.2
    ;
   }
   else if(
    (convertFrom.value ==='Gallon') && (convertTo.value ==='Cubic_Millimeter')
   ){
    result.value=length1.value*3785411.784;
   }
   else if(
    (convertFrom.value ==='Gallon') && (convertTo.value ==='Milliliter')
   ){
    result.value=length1.value*3785;
   }
   else if(
    (convertFrom.value ==='Gallon') && (convertTo.value ==='Liter')
   ){
    result.value=length1.value*3.785;
   }
}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length1.addEventListener('change',convertUnits);
