const length1=document.getElementById('amount');
// const length1=document.querySelector('#amount').valueOf;
console.log(length1)
const convertFrom=document.querySelector('#from');

const convertTo=document.querySelector('#to');
const result=document.querySelector('#result');

const units=[
    'Meter',
    'Kilometer',
    'Inch',
    'Foot'
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
    (convertFrom.value ==='Centimeter') && (convertTo.value ==='Centimeter') ||
    (convertFrom.value ==='Meter') && (convertTo.value ==='Meter') ||
    (convertFrom.value ==='Kilometer') && (convertTo.value ==='Kilometer') ||
    (convertFrom.value ==='Inch') && (convertTo.value ==='Inch') ||
    (convertFrom.value ==='Foot') && (convertTo.value ==='Foot')
   ){
   result.value=length1.value;
   }
   else if(
    (convertFrom.value ==='Centimeter') && (convertTo.value ==='Meter')
   ){
    result.value=length1.value/100;
   }
   else if(
    (convertFrom.value ==='Centimeter') && (convertTo.value ==='Kilometer')
   ){
    result.value=length1.value/100000;
   }
   else if(
    (convertFrom.value ==='Centimeter') && (convertTo.value ==='Inch')
   ){
    result.value=length1.value*0.393701;
   }
   else if(
    (convertFrom.value ==='Centimeter') && (convertTo.value ==='Foot')
   ){
    result.value=length1.value*0.0328084;
   }
   else if(
    (convertFrom.value ==='Meter') && (convertTo.value ==='Centimeter')
   ){
    result.value=length1.value*100;
   }
   else if(
    (convertFrom.value ==='Meter') && (convertTo.value ==='Kilometer')
   ){
    result.value=length1.value/1000;
   }
   else if(
    (convertFrom.value ==='Meter') && (convertTo.value ==='Inch')
   ){
    result.value=length1.value*39.3701;
   }
   else if(
    (convertFrom.value ==='Meter') && (convertTo.value ==='Foot')
   ){
    result.value=length1.value*3.28084;
   }
   else if(
    (convertFrom.value ==='Kilometer') && (convertTo.value ==='Centimeter')
   ){
    result.value=length1.value*100000;
   }
   else if(
    (convertFrom.value ==='Kilometer') && (convertTo.value ==='Meter')
   ){
    result.value=length1.value*1000;
   }
   else if(
    (convertFrom.value ==='Kilometer') && (convertTo.value ==='Inch')
   ){
    result.value=length1.value*39370.1;
   }
   else if(
    (convertFrom.value ==='Kilometer') && (convertTo.value ==='Foot')
   ){
    result.value=length1.value*3280.84;
   }
   else if(
    (convertFrom.value ==='Inch') && (convertTo.value ==='Centimeter')
   ){
    result.value=length1.value*2.54;
   }
   else if(
    (convertFrom.value ==='Inch') && (convertTo.value ==='Kilometer')
   ){
    result.value=length1.value/39370;
   }
   else if(
    (convertFrom.value ==='Inch') && (convertTo.value ==='Meter')
   ){
    result.value=length1.value*0.0254;
   }
   else if(
    (convertFrom.value ==='Inch') && (convertTo.value ==='Foot')
   ){
    result.value=length1.value/12;
   }
   else if(
    (convertFrom.value ==='Foot') && (convertTo.value ==='Centimeter')
   ){
    result.value=length1.value*30.48;
   }
   else if(
    (convertFrom.value ==='Foot') && (convertTo.value ==='Kilometer')
   ){
    result.value=length1.value*0.0003048;
   }
   else if(
    (convertFrom.value ==='Foot') && (convertTo.value ==='Inch')
   ){
    result.value=length1.value*12;
   }
   else if(
    (convertFrom.value ==='Foot') && (convertTo.value ==='Meter')
   ){
    result.value=length1.value*0.3048;
   }
}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length1.addEventListener('change',convertUnits);
