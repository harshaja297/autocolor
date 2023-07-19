/*import car from "./jsaddon.js";

let division=document.getElementById("division");
let list=document.createElement("ul");
list.innerHTML= `
<li>Car Object</li>
<li>Car Name:${car.cName}</li>
<li>Car Color:${car.cColor}</li>
<li>Car Version:${car.cVersion}</li>
<li>Car Price:${car.cPrice}</li>
`;
division.appendChild(list);
*/
let n = "Robert Andrew George";
names  = n.split(" ");
let res='';
for(nam of names){
    res +=nam.charAt(0);
}
// console.log(res);

// let arr = [1,-2,-6,3,4,-3,-2,6,7,8];

// let ans = arr.reduce((sum,val)=>{
//     if(val>=0){
//         sum += val;
//     }
//     // console.log(sum);
//     return sum;
// },0);
// console.log(ans);
// }
// let a = ()=> ani.innerHTML = `Loading &nbsp&nbsp  &nbsp    --`;
// let b = ()=> ani.innerHTML = `Loading &nbsp  &nbsp &nbsp/`;
// let c = ()=> ani.innerHTML = `Loading &nbsp  &nbsp &nbsp |`;
// let d = ()=> ani.innerHTML = `Loading &nbsp  &nbsp &nbsp \\`;
// let e = ()=> ani.innerHTML = `Loading &nbsp  &nbsp &nbsp |`;

let header = document.createElement("h1");
header.id = "george";
let h1 = document.getElementById('h1');
let btn = document.getElementById("btn");

let j=0;
let arrOfColors = "0 1 2 3 4 5 6 7 8 9 A B C D E F";

let rand =()=> Math.floor(Math.random()*16);
let arr = arrOfColors.split(' ');
btn.addEventListener('click',change());
console.log(arr);

// function change(){
//     let col = '#';
//     body = document.querySelector("body");
//     for(let i = 0 ; i<6 ; i++){
//         col = col+arr[rand()];
//     }
//     body.style.backgroundColor = col;
//     j++;
//     h1.innerHTML = `COUNTER : ${j}`;

function getter(){
    funs = [a(),b(),c(),d(),e()];
    for(let i =0 ;i<=5 ;i++){
        return funs[i];
    }
}

setInterval(change,1500)
function change(){
    let col = '#';
    
    body = document.querySelector("body");
    body.style.transitionDuration ="4s";
    for(let i = 0 ; i<6 ; i++){
        col = col+arr[rand()];
    }
    body.style.backgroundColor = col;
    j++;
    // h1.innerHTML = `Counter: ${j}`;
    // document.getElementById("parent").appendChild(header);
    // document.getElementById("george").innerHTML = `dfsjjdfhajlh`;   
}