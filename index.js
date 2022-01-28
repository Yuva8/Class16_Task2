


function addnewRow(){
    
    let firstname = document.getElementById("first-name");
    let lastname = document.getElementById("last-name");
    let pincode = document.getElementById("pincode");
    let gender = document.getElementById("gender");
    let food = document.getElementById("food");
    let state = document.getElementById("state");
    let country = document.getElementById("country");
    let address = document.getElementById("address");
  
    
    let tableVar = document.getElementById("table");
    let row = tableVar.insertRow();
    let td1 = row.insertCell(0);
    let td2 = row.insertCell(1);
    let td3 = row.insertCell(2);
    let td4 = row.insertCell(3);
    let td5 = row.insertCell(4);
    let td6 = row.insertCell(5);
    let td7 = row.insertCell(6);
    let td8 = row.insertCell(7);
  
    
    td1.innerHTML = firstname.value;
    td2.innerHTML = lastname.value;
    td3.innerHTML = pincode.value;
    td4.innerHTML = gender.value;
    td5.innerHTML =
      food.selectedOptions[0].value + " , " + food.selectedOptions[1].value;
    td6.innerHTML = state.value;
    td7.innerHTML = country.value;
    td8.innerHTML = address.value;
  
    
    firstname.value = "";
    lastname.value  = "";
    pincode.value   = "";
    gender.value    = "";
    food.value      = "";
    state.value     = "";
    country.value   = "";
    address.value   = "";
  };