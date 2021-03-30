var addcurrord = document.getElementById("addcurrord");

var productPrices = [1000.00, 2000.00, 2500.00, 800.00];
var sizePrices = [0.00, 2500.00, 5000.00];
var extraPrices = [500.00, 1000.00, 1500.00];

//For Current Order
addcurrord.addEventListener("click",function(event){

    // html elements
    var manufacturers = document.getElementsByName("manufacturers");
    var products = document.getElementsByName("products");
    var size = document.getElementsByName("size");

    var productPrice = 0.00;
    var sizePrice = 0.00;
    var extraPrice = 0.00;
    
//Script for Displaying
    for(var i = 0; i < manufacturers.length; i++) {
        if(manufacturers[i].checked) {
            document.getElementById("manufacCurr").value = manufacturers[i].value;
        }
    }

    for(var p = 0; p < products.length; p++) {
        if(products[p].checked) {
            document.getElementById("prodtypeCurr").value = products[p].value;
        }
    }

    for(var s = 0; s < size.length; s++) {
        if(size[s].checked) {
            document.getElementById("sizeCurr").value = size[s].value;
        }
    }

    //Script for Pricing
    var products = document.getElementsByName("products");
    var size = document.getElementsByName("size");

    for(var j = 0; j < products.length; j++) {
        if(products[j].checked) {
            // access selected product price.
            productPrice = productPrices[j];
        }
    }

    for(var a = 0; a < size.length; a++) {
        if(size[a].checked) {
            // access selected product price.
            sizePrice = sizePrices[a];
        }
    }

    // Script for Extras
    var ext1 = document.getElementById("efp");
    var ext2 = document.getElementById("efgc");
    var ext3 = document.getElementById("efd");


    if(ext1.checked) {
        document.getElementById("extCurr1").value = ext1.value;
        extraPrice += extraPrices[0];
    }

    if(ext2.checked) {
        document.getElementById("extCurr2").value = ext2.value;
        extraPrice += extraPrices[1];
    }

    if(ext3.checked) {
        document.getElementById("extCurr3").value = ext3.value;
        extraPrice += extraPrices[2];
    }

    // calculate total cost
    var totalCost = productPrice + sizePrice + extraPrice;

    document.getElementById('totalcurrent').value = totalCost;
});

//FOR FAVOURITES//
//=========================================================================================================================================//

var addfav = document.getElementById("addfav");

//For Favourite
addfav.addEventListener("click",function(event){
    var manufacturers = document.getElementsByName("manufacturers");
    var products = document.getElementsByName("products");
    var size = document.getElementsByName("size");
    var productPrice = 0.00;
    var sizePrice = 0.00;
    var extraPrice = 0.00;
    
    var localobj = {};
    
//Script for Displaying
    for(var i = 0; i < manufacturers.length; i++) {
        if(manufacturers[i].checked) {
            document.getElementById("manufacFav").value = manufacturers[i].value;
            localobj.manufacturers = manufacturers[i].value;
        }
    }

    for(var p = 0; p < products.length; p++) {
        if(products[p].checked) {
            document.getElementById("prodtypeFav").value = products[p].value;
            localobj.products = products[p].value;
        }
    }

    for(var s = 0; s < size.length; s++) {
        if(size[s].checked) {
            document.getElementById("sizeFav").value = size[s].value;
            localobj.size = size[s].value;
        }
    }

    //Script for Pricing
    var products = document.getElementsByName("products");
    var size = document.getElementsByName("size");

    for(var j = 0; j < products.length; j++) {
        if(products[j].checked) {
            // access selected product price.
            productPrice = productPrices[j];
        }
    }

    for(var a = 0; a < size.length; a++) {
        if(size[a].checked) {
            // access selected product price.
            sizePrice = sizePrices[a];
        }
    }

    // Script for Extras
    var ext1 = document.getElementById("efp");
    var ext2 = document.getElementById("efgc");
    var ext3 = document.getElementById("efd");


    if(ext1.checked) {
        document.getElementById("extFav1").value = ext1.value;
        extraPrice += extraPrices[0];
        localobj.ext1 = ext1.value;
    }

    if(ext2.checked) {
        document.getElementById("extFav2").value = ext2.value;
        extraPrice += extraPrices[1];
        localobj.ext2 = ext2.value;
    }

    if(ext3.checked) {
        document.getElementById("extFav3").value = ext3.value;
        extraPrice += extraPrices[2];
        localobj.ext3 = ext3.value;
    }


    // calculate total cost
    var totalCost = productPrice + sizePrice + extraPrice;

    document.getElementById('totalfav').value = totalCost;
    localobj.totalCost = totalCost;

//scripting for storing favourite items in local storage
    var localStorageKey = window.localStorage.getItem('favourites items');

    if(localStorageKey) {
        var array = JSON.parse(localStorageKey);
        array.push(localobj);
        window.localStorage.setItem('favourites items', JSON.stringify(array));
    }

    else {
        var arr = [];
        arr.push(localobj);
        window.localStorage.setItem('favourites items', JSON.stringify(arr));
    }
});

//========================================================================================

// scripting for calculating total in overall table
function calculateTotal(){
    var price = 0;
    var table = document.getElementById('overallOrderTable')
    
    var i = table.rows.length - 1;

    while (i > 0)
    {
        price = price + parseInt(table.rows[i].cells[4].innerHTML);
        i--;
    }
    document.getElementById('total').value ="Rs. "+ price;
}
// scripting for from overall table from current order
function addRow(){                

    var manufact = document.getElementById('manufacCurr').value;
    var proType  = document.getElementById('prodtypeCurr').value;
    var proSize = document.getElementById('sizeCurr').value;
    var extra1 = document.getElementById('extCurr1').value;
    var extra2 = document.getElementById('extCurr2').value;
    var extra3 = document.getElementById('extCurr3').value;
    var perprice = document.getElementById('totalcurrent').value;

    var table = document.getElementById('overallOrderTable');

    var newRow = table.insertRow(table.rows.length);

    var cel01 = newRow.insertCell(0);
    var cel02 = newRow.insertCell(1);
    var cel03 = newRow.insertCell(2);
    var cel04 = newRow.insertCell(3);
    var cel05 = newRow.insertCell(4);

    cel01.innerText = manufact;
    cel02.innerText = proType;
    cel03.innerText = proSize;
    cel04.innerText = extra1 + ',' + extra2 + ',' + extra3;
    cel05.innerText = perprice;

    document.getElementById('manufacCurr').value = "";
    document.getElementById('prodtypeCurr').value = "";
    document.getElementById('sizeCurr').value = "";
    document.getElementById('extCurr1').value = "";
    document.getElementById('extCurr2').value = "";
    document.getElementById('extCurr3').value = "";
    document.getElementById('totalcurrent').value = "";

    calculateTotal();
}

// scrpting for from overall table from favourites
function addfavRow(){
    var manufactf = document.getElementById('manufacFav').value;
    var proTypef  = document.getElementById('prodtypeFav').value;
    var proSizef = document.getElementById('sizeFav').value;
    var extra1f = document.getElementById('extFav1').value;
    var extra2f = document.getElementById('extFav2').value;
    var extra3f = document.getElementById('extFav3').value;
    var perpricef = document.getElementById('totalfav').value;

    var table = document.getElementById('overallOrderTable');
    
    var newRow = table.insertRow(table.rows.length);

    var cel01 = newRow.insertCell(0);
    var cel02 = newRow.insertCell(1);
    var cel03 = newRow.insertCell(2);
    var cel04 = newRow.insertCell(3);
    var cel05 = newRow.insertCell(4);

    cel01.innerText = manufactf;
    cel02.innerText = proTypef;
    cel03.innerText = proSizef;
    cel04.innerText = extra1f + ',' + extra2f + ',' + extra3f;
    cel05.innerText = perpricef;

    calculateTotal();
}

//Place Order Button Scripting
var btnPlaceOrder = document.getElementById('plcord');

btnPlaceOrder.addEventListener('click', plcord);

function plcord(){
    
    var overallOrderTable = document.getElementById("overallOrderTable");
    
    var noOfOrders = (overallOrderTable.rows.length - 1);
    
    console.log('no of orders', noOfOrders);

    if(noOfOrders >= 1){
        window.alert("Your order has been placed successfully!");
        
        var count = overallOrderTable.rows.length - 1;

        while (count > 0){
            overallOrderTable.deleteRow(count);
            count--;
            
            // to clear the total entered
            document.getElementById('total').value = "";
        }
    }

    else{
        window.alert("Please select a order!");
    }
}

// Checking Loyalty Points 

var loybtn = document.getElementById('loybtn');

loybtn.addEventListener('click', checkLoyalty);

function checkLoyalty() {
    var overallOrderTable = document.getElementById("overallOrderTable");
    var noOfOrders = (overallOrderTable.rows.length - 1);
    var loyaltyP = 0.0;
    
    if (noOfOrders > 3) {
       loyaltyP = (noOfOrders * 20)                                                                                                                                                                                                    ;
       window.alert("You have Earned " + loyaltyP +" Loyalty Points");
    } 

    else{
       window.alert("Place more than 3 orders to earn Loyalty Points.");
    }

    var loyalty_points = [];
    if("loyalty_points" in localStorage) {
    loyalty_points = JSON.parse(localStorage.getItem('loyalty_points'));
    }
    loyalty_points.push(loyaltyP);
    localStorage.setItem('loyalty_points', JSON.stringify(loyalty_points));
}


// Scripting for retrieving favourite items from local storage
function getLocalStorageData(){
    var key = window.localStorage.getItem("favourites items");

    if (key) {
        var array = JSON.parse(key);

        var obj = array[array.length -1];

        document.getElementById('manufacFav').value = obj.manufacturers;
        document.getElementById('prodtypeFav').value = obj.products;
        document.getElementById('sizeFav').value = obj.size;
        document.getElementById('extFav1').value = obj.ext1;
        document.getElementById('extFav2').value = obj.ext2;
        document.getElementById('extFav3').value = obj.ext3;
        document.getElementById('totalfav').value = obj.totalCost;
    }
}

// Scripting to avoid data loss after refreshing the browser
window.onload = function(){
    getLocalStorageData();
}