var groceryList = [];
//localStorage.clear();


document.addEventListener("DOMContentLoaded", function (ev) {
  //this runs when the page loads
    if (localStorage.getItem("grocery-fora0027")) {
        groceryList = JSON.parse(localStorage.getItem("grocery-fora0027"));
    //convert from String to Array
    }
  
    showList();
  
    document.querySelector("#btnAdd").addEventListener("click", function (ev) {
        ev.preventDefault();
        var newItem = document.querySelector("#item").value;
        if (!newItem.trim() == "") {
           groceryList.push(newItem);
            localStorage.setItem("grocery-fora0027", JSON.stringify(groceryList));
        //convert from Array to String.
            showList();
            clearInput();
            return false; 
        }
        
    });
  
  
  //document.myForm.addEventListener("submit", function(ev){});
});

function removeItem(ev) {
  //this.firstChild.nodeValue
  //ev.currentTarget.firstChild - the textNode inside the paragraph
  //ev.currentTarget.firstChild.nodeValue - the text inside the textNode
    var txt = ev.currentTarget.previousSibling.firstChild.nodeValue;
    for (var i=0;i<groceryList.length;i++){
  	if(groceryList[i] == txt){
      //found the match
      groceryList.splice(i, 1);
    }
  }
  localStorage.setItem("grocery-fora0027", JSON.stringify(groceryList) );
  showList();
}

function markPurchased(){
        
        this.classList.toggle('purchased');
    }
    

function showList(){
    
  var output = document.querySelector(".output");
  output.innerHTML = "";
  for(var i=0;i<groceryList.length;i++){
    var div = document.createElement('div');
    var p = document.createElement("p");
    var icon = document.createElement("img");
      icon.setAttribute('src', 'img/trash.png');
      p.innerHTML = groceryList[i];
      
      
    output.appendChild(div);
    div.appendChild(p);
    div.appendChild(icon);
      
      
    p.addEventListener("click", markPurchased);
    icon.addEventListener("click", removeItem);
  };
};

function clearInput(){
    var clearItem = document.querySelector('.item');
    if (clearItem.value !="") {
        clearItem.value = "";
    }
}
