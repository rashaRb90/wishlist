'use strict;'


// 1- constructor
//2- event listner
// save data to local storage

//3- global render contains :
//3.1 fetch data from local storage
// send this data to rendring

var CartOne=function(name,date,rand){
    this.name=name;
    this.date=date;
    this.rand=rand;
    CartOne.all.push(this);
}

CartOne.all=[];
var Cart = function(items) {
   
    
    this.items = items;
    
  };

  //////

document.getElementById('formOne').addEventListener('submit',renOne);
    function renOne(event){
event.preventDefault();
var name1=event.target.i1.value;
var date1=event.target.i2.value;
    // console.log(date1);
    var randomNum=getRndInteger();
var store1=[name1,date1,randomNum];
// console.log(store1);
new CartOne(name1,date1,randomNum);
saveToLocal();
// fromLocal();
doTable();
document.getElementById('formOne').reset();
}




var table=document.getElementById('divTwo');
var tableBody=table.childNodes[5].childNodes[3];

function doTable(){
    fromLocal();
    // console.log(ship);
    // getElemntFromstor();
    tableBody.textContent=null;
    // console.log(ship);
    for(var i=0;i<ship.items.length;i++){
        var tr1=document.createElement('tr');
        tableBody.appendChild(tr1);
        tr1.setAttribute('id',`${i} row`);
        
        document.getElementById(`${i} row`).addEventListener('click',remov);
// console.log("any");
    var td1=document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent=ship.items[i].name;
    var td1=document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent=ship.items[i].date;
    var td1=document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent=`${ship.items[i].rand} Years`;
    var td1=document.createElement('button');
    td1.setAttribute('id',i);
    tr1.appendChild(td1);
    td1.textContent='X';
  

}

}



function getRndInteger() {
    return Math.floor(Math.random() * (100 - 1) ) + 1;
  }
  function saveToLocal(){
  
      localStorage.setItem('myS',JSON.stringify(CartOne.all))
  }
  function fromLocal(){
      var a=JSON.parse(localStorage.getItem('myS'))||[];
      ship=new Cart(a);
    //   console.log(a);
  }
//   renOne();

// ren();
doTable();
function remov(event){
    // console.log(event.target.textContent=='X');
    // event.remove();
    // console.log(document.getElementById('mybutton').textContent);
  var newTable=tableBody;
  
    // console.log(newTable);
    // console.log(event);
    // console.log(event.target.parentNode);
    console.log(parseInt(event.target.id));
    CartOne.all.splice(parseInt(event.target.id),1);
    saveToLocal();
    if(event.target.textContent=='X'){
    event.target.parentNode.remove();}
}