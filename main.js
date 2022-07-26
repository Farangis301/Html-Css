console.log("Js hello");
console.error("erorr hi")
let num=5; /* создание перем с названием нам */
num = 7; /* изменяем знапчение переменной  */
console.log("Переменная:" + num + ".");
let number;
number=5;
let num_1=5;
let num_2=15;
console.log("Вычитание:" + (num_1+ num_2));
let num_3=5;
num_3+=7; /*= num_3=num_3+7 / num_3++(+1) */
console.log("result:" + num_3);
let str_1="12";
let str_2= 2;
console.log("res:" + (str_1 +str_2));
console.log("Math:" + Math.PI);
console.log(Math.max(4,8,-56,0,78));
let userName = "Alex";
let userSurname = "Smith";

console.log(`${userName} ${userSurname} is an advocate`);

let me = 15;
let has= true;

if( me == 17 || !has ){ /* has != false*/
    console.log("ok");
}else if ( me < 13){
console.log("Yes");
} else{
    console.log("Error");
}
var stroka = "word";
switch(stroka) {
    case "4": 
        console.log("perem 4");
        break;
    case "word":
        console.log("for 34");
        break;
    default:console.log("Java for you");/* если предыдущие условия не выполнятся */
}
let arr =[1,34,5.6,-300,true];
arr[3] = "word";/* изменить знач для опр элемента*/
console.log(arr[3]);
console.log(arr.length);

let matrix =[[2,34,-45],[4,"true"],[-78,0]];
matrix[1][0]=90;/* =4 меняем на 90 */
console.log(matrix);
for(let i=0; i<10; i++){
    console.log(i);
}
let j=1000;
while(j>100) {
    console.log(j)
    j -=100;
}
for(let i=10; i<=20; i++){
    if(i>15)
    break;
    console.log(i);
}
for(let i =10; i<=20; i++){
    if(i %2 ==0)
    continue;
    console.log(i);
}
let s= 9;
switch(s){
    case 1: console.log('100 очков опыта');
    break;
    case 3: console.log('400 очков опыта');
    break;
    default:console.log(s*100);
}
alert("Look! Good weather");
let data=confirm("Are you good");
console.log(data);

/* let you=confirm("Do you wanna go");
if(you){
    alert("I dont");
} */

let age=prompt("How are you old?");
if (age>=18){
    alert("Разрешено посещение сайта")
} else{
    alert("Запрещенно")
}

let person =null;
if(confirm("Are you sure?")){
    person = prompt("Name");
    alert("Hello," + person);
} else{
    alert("Cancel");
}
function info(word) {
    console.log("word");
    console.log("!");
}
info();

/*f unction summa(a,b){
    let res= a +b;
    info(res);
}
summa(5,7); */

/* function summa(arr){
    for(let i=0; i< arr.length; i++)
    sum += arr[i];
    console.log(sum);
}
let array =[6,8,1];
summa(array); */

function onClickButton(){
    alert("Вы нажали на меня");
}

function sqr(a){
    let result= a*a;
    return result;
}
sqr(4);