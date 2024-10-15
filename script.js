var popupoverlay=document.querySelector(".popoverlay")
var poppupbox=document.querySelector(".popup-box")
var addpopupbutton=document.querySelector(".addbutton")

addpopupbutton.addEventListener("click",function(){

    popupoverlay.style.display="block"
    poppupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel-book")

cancelbutton.addEventListener("click",function(event){
 event.preventDefault()
 popupoverlay.style.display="none"
    poppupbox.style.display="none"
})


var container=document.querySelector(".container")
var addbook= document.getElementById("add-book")
var booktitle=document.getElementById("Book-title-input")
var authorname=document.getElementById("Author-name-input")
var description=document.getElementById("Description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2> 
    <h5>${authorname.value}</h5> 
    <p>${description.value}</p> 
      <button onclick="deletebook()">Remove</button>`
     container.append(div)
      popupoverlay.style.display="none"
    poppupbox.style.display="none"
})

function deletebook(){
    event.target.parentElement.remove()
}