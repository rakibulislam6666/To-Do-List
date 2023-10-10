let button = document.getElementById('button')

function ClearAll(){
  if(confirm("Do You Want to Clear List?")){
  localStorage.clear()
  loadData();
  }
}



button.addEventListener('click',()=>{
  
let title = document.getElementById('title').value
let description = document.getElementById('description').value
  
if(localStorage.getItem("all-item")==null){
item = []
item.push([title,description])
localStorage.setItem('all-item',JSON.stringify(item))
  
}else{
  let items = JSON.parse(localStorage.getItem("all-item"))
  items.push([title,description])
  localStorage.setItem("all-item",JSON.stringify(items))
}
loadData();

})


function loadData(){

let getItem = JSON.parse(localStorage.getItem('all-item'))
var str = "";
getItem.forEach((element,index)=>{
  str+=`  <tr>
      <td>${index+1}</td>
      <td>${element[0]}</td>
      <td>${element[1]}</td>
      <td><button id="delete" onclick="itemDelete(${index})">Delete</button></button></td>
    </tr>`
})

document.getElementById('table').innerHTML=str;

}

loadData();



function itemDelete(index){
  console.log(index);
let  items = JSON.parse( localStorage.getItem('all-item'))
items.splice(index,1)
localStorage.setItem('all-item',JSON.stringify(items))
loadData()
}

