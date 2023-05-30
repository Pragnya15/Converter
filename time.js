const length1=document.getElementById('amount');
// const length1=document.querySelector('#amount').valueOf;
console.log(length1)
const convertFrom=document.querySelector('#from');

const convertTo=document.querySelector('#to');
const result=document.querySelector('#result');

const units=[
    'Millisecond','Minute','Hour','Day','Week','Month','Year'
];
const selectElm=document.querySelectorAll('select');
// console.log(selectElm)


for(let i=units.length-1;i>=0;i--){
    let option= `<option value=${units[i]}>${units[i]}</option>`;
    selectElm[0].firstElementChild.insertAdjacentHTML('afterend',option);
}

for(let i=units.length-1;i>=0;i--){
    let option=` <option value=${units[i]}>${units[i]}</option>`;
    selectElm[1].firstElementChild.insertAdjacentHTML('afterend',option);
}
function convertUnits (){
   if(
    (convertFrom.value ==='Second') && (convertTo.value ==='Second') ||
    (convertFrom.value ==='Millisecond') && (convertTo.value ==='Millisecond') ||
    (convertFrom.value ==='Minute') && (convertTo.value ==='Minute') ||
    (convertFrom.value ==='Hour') && (convertTo.value ==='Hour') ||
    (convertFrom.value ==='Day') && (convertTo.value ==='Day')||
    (convertFrom.value ==='Week') && (convertTo.value ==='Week')||
    (convertFrom.value ==='Month') && (convertTo.value ==='Month')||
    (convertFrom.value ==='Year') && (convertTo.value ==='Year')
   ){
   result.value=length1.value;
   }
   else if(
    (convertFrom.value ==='Second') && (convertTo.value ==='Millisecond')
   ){
    result.value=length1.value*1000;
   }
   else if(
    (convertFrom.value ==='Second') && (convertTo.value ==='Minute')
   ){
    result.value=length1.value/60;
   }
   else if(
    (convertFrom.value ==='Second') && (convertTo.value ==='Hour')
   ){
    result.value=length1.value/3600;
   }
   else if(
    (convertFrom.value ==='Second') && (convertTo.value ==='Week')
   ){
    result.value=length1.value/604800;
   }
   else if(
    (convertFrom.value ==='Second') && (convertTo.value ==='Month')
   ){
    result.value=length1.value/2629746;
   }
   else if(
    (convertFrom.value ==='Second') && (convertTo.value ==='Year')
   ){
    result.value=length1.value/31556952;
   }
   else if(
    (convertFrom.value ==='Second') && (convertTo.value ==='Day')
   ){
    result.value=length1.value/86400;
   }
   else if(
    (convertFrom.value ==='Millisecond') && (convertTo.value ==='Second')
   ){
    result.value=length1.value/1000;
   }
   else if(
    (convertFrom.value ==='Millisecond') && (convertTo.value ==='Minute')
   ){
    result.value=length1.value/60000;
   }
   else if(
    (convertFrom.value ==='Millisecond') && (convertTo.value ==='Hour')
   ){
    result.value=length1.value/3600000;
   }
   else if(
    (convertFrom.value ==='Millisecond') && (convertTo.value ==='Week')
   ){
    result.value=length1.value/604800000;
   }
   else if(
    (convertFrom.value ==='Millisecond') && (convertTo.value ==='Month')
   ){
    result.value=length1.value/2629746000;
   }
   else if(
    (convertFrom.value ==='Millisecond') && (convertTo.value ==='Year')
   ){
    result.value=length1.value/31556952000;
   }
   else if(
    (convertFrom.value ==='Millisecond') && (convertTo.value ==='Day')
   ){
    result.value=length1.value/86400000;
   }
   else if(
    (convertFrom.value ==='Minute') && (convertTo.value ==='Second')
   ){
    result.value=length1.value*60;
   }
   else if(
    (convertFrom.value ==='Minute') && (convertTo.value ==='Millisecond')
   ){
    result.value=length1.value*60000;
   }
   else if(
    (convertFrom.value ==='Minute') && (convertTo.value ==='Hour')
   ){
    result.value=length1.value/60;
   }
   else if(
    (convertFrom.value ==='Minute') && (convertTo.value ==='Week')
   ){
    result.value=length1.value/10080;
   }
   else if(
    (convertFrom.value ==='Minute') && (convertTo.value ==='Month')
   ){
    result.value=length1.value/43800;
   }
   else if(
    (convertFrom.value ==='Minute') && (convertTo.value ==='Year')
   ){
    result.value=length1.value/525600;
   }
   else if(
    (convertFrom.value ==='Minute') && (convertTo.value ==='Day')
   ){
    result.value=length1.value/1440;
   }
   else if(
    (convertFrom.value ==='Hour') && (convertTo.value ==='Second')
   ){
    result.value=length1.value*3600;
   }
   else if(
    (convertFrom.value ==='Hour') && (convertTo.value ==='Minute')
   ){
    result.value=length1.value*60;
   }
   else if(
    (convertFrom.value ==='Hour') && (convertTo.value ==='Millisecond')
   ){
    result.value=length1.value*3600000;
   }
   else if(
    (convertFrom.value ==='Hour') && (convertTo.value ==='Week')
   ){
    result.value=length1.value/168;
   }
   else if(
    (convertFrom.value ==='Hour') && (convertTo.value ==='Month')
   ){
    result.value=length1.value/730;
   }
   else if(
    (convertFrom.value ==='Hour') && (convertTo.value ==='Year')
   ){
    result.value=length1.value/8760;
   }
   else if(
    (convertFrom.value ==='Hour') && (convertTo.value ==='Day')
   ){
    result.value=length1.value/24;
   }
   else if(
    (convertFrom.value ==='Week') && (convertTo.value ==='Second')
   ){
    result.value=length1.value*604800;
   }
   else if(
    (convertFrom.value ==='Week') && (convertTo.value ==='Minute')
   ){
    result.value=length1.value*10080;
   }
   else if(
    (convertFrom.value ==='Week') && (convertTo.value ==='Hour')
   ){
    result.value=length1.value*168;
   }
   else if(
    (convertFrom.value ==='Week') && (convertTo.value ==='Milliseonds')
   ){
    result.value=length1.value*604800000;
   }
   else if(
    (convertFrom.value ==='Week') && (convertTo.value ==='Month')
   ){
    result.value=length1.value/4.345;
   }
   else if(
    (convertFrom.value ==='Week') && (convertTo.value ==='Year')
   ){
    result.value=length1.value/52.143;
   }
   else if(
    (convertFrom.value ==='Week') && (convertTo.value ==='Day')
   ){
    result.value=length1.value*7;
   }
   else if(
    (convertFrom.value ==='Month') && (convertTo.value ==='Second')
   ){
    result.value=length1.value*2629800;
   }
   else if(
    (convertFrom.value ==='Month') && (convertTo.value ==='Minute')
   ){
    result.value=length1.value*43800;
   }
   else if(
    (convertFrom.value ==='Month') && (convertTo.value ==='Hour')
   ){
    result.value=length1.value*730;
   }
   else if(
    (convertFrom.value ==='Month') && (convertTo.value ==='Week')
   ){
    result.value=length1.value*4.345;
   }
   else if(
    (convertFrom.value ==='Month') && (convertTo.value ==='Millisecond')
   ){
    result.value=length1.value*2629800000;
   }
   else if(
    (convertFrom.value ==='Month') && (convertTo.value ==='Year')
   ){
    result.value=length1.value/12;
   }
   else if(
    (convertFrom.value ==='Month') && (convertTo.value ==='Day')
   ){
    result.value=length1.value*30.417;
   }
   else if(
    (convertFrom.value ==='Year') && (convertTo.value ==='Second')
   ){
    result.value=length1.value*31536000;
   }
   else if(
    (convertFrom.value ==='Year') && (convertTo.value ==='Minute')
   ){
    result.value=length1.value*525600;
   }
   else if(
    (convertFrom.value ==='Year') && (convertTo.value ==='Hour')
   ){
    result.value=length1.value*8760;
   }
   else if(
    (convertFrom.value ==='Year') && (convertTo.value ==='Week')
   ){
    result.value=length1.value*52.143;
   }
   else if(
    (convertFrom.value ==='Year') && (convertTo.value ==='Month')
   ){
    result.value=length1.value*12;
   }
   else if(
    (convertFrom.value ==='Year') && (convertTo.value ==='Millisecond')
   ){
    result.value=length1.value*31556926000;
   }
   else if(
    (convertFrom.value ==='Year') && (convertTo.value ==='Day')
   ){
    result.value=length1.value*365;
   }
   else if(
    (convertFrom.value ==='Day') && (convertTo.value ==='Second')
   ){
    result.value=length1.value*86400;
   }
   else if(
    (convertFrom.value ==='Day') && (convertTo.value ==='Minute')
   ){
    result.value=length1.value*1440;
   }
   else if(
    (convertFrom.value ==='Day') && (convertTo.value ==='Hour')
   ){
    result.value=length1.value*24;

   }
   else if(
    (convertFrom.value ==='Day') && (convertTo.value ==='Week')
   ){
    result.value=length1.value/7;
   }
   else if(
    (convertFrom.value ==='Day') && (convertTo.value ==='Month')
   ){
    result.value=length1.value/30.417;
   }
   else if(
    (convertFrom.value ==='Day') && (convertTo.value ==='Year')
   ){
    result.value=length1.value/365;
   }
   else if(
    (convertFrom.value ==='Day') && (convertTo.value ==='Millisecond')
   ){
    result.value=length1.value*86400000;
   }
}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length1.addEventListener('change',convertUnits);
