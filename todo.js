let h1=document.querySelector("h1");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let lis=document.querySelector("li");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    let del=document.createElement("button");
    del.innerText="delete";

    item.innerText=inp.value;
    ul.appendChild(item);

    item.appendChild(del);
   del.addEventListener("click",function(){
    ul.removeChild(item);
   });
})