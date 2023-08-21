let selectoption;
let productName;
let price;
let quantity;
let amount;

function productChange() {
	selectoption=document.getElementById('OPTION');
	productName=selectoption.options[selectoption.selectedIndex].text;
	// price=document.getElementById(`OPTION`).value
	price=selectoption.value
	document.getElementById(`PRICE`).value=price

}
function qChange() {
	quantity=document.getElementById("QUANTITY").value;
	amount=price*quantity;
	document.getElementById(`AMOUNT`).value=amount
}
function AddChange() {
	let val=document.getElementById(`PRICE`).value;
	let qan=document.getElementById("QUANTITY").value;
	if(val==""){
		alert('Select An Item');

	}
	else if (qan=="") {
		alert("Enter a Quantity");
	} 
	else{


	let addAll="<tr><td>" + productName + "</td><td>"  + price +
	"</td><td>" + quantity + "</td><td>" + amount + "</td></tr>";
	let display=document.getElementById('TBODY');
	display.innerHTML += addAll;
	//alert(addAll)
	
	let table=document.getElementById('TABLE2')
	,sumVal=0;
	for (var i = 1; i < table.rows.length; i++) {
		sumVal = sumVal + parseFloat(table.rows[i].cells[3].innerHTML)
	}
		document.getElementById('TOTAL').value=sumVal

		let discount= document.getElementById('DISCOUNT').value;
		let finaldiscount= (sumVal / 100) * discount;
		 let amount2=sumVal-finaldiscount;
		// let gsttax=document.getElementById('TAX').value;
		// netamount=amount2+amount2*gsttax/100
		document.getElementById('NETAMOUNT').value=Math.round(amount2);



		document.getElementById(`AMOUNT`).value="";
		document.getElementById(`PRICE`).value="";
		document.getElementById("QUANTITY").value="";
		//  let haris=document.getElementById('OPTION');
		//  let sel=document.getElementById('sel');

	// haris=sel;

	let select_box = document.getElementById("OPTION");
select_box.selectedIndex = 0;

}

		//alert(netamount)

}
// function zeRo(){
// 	document.getElementById(`AMOUNT`).value.reset();
// 	document.getElementById(`PRICE`).innerHTML.reset();
// 	document.getElementById("QUANTITY").reset();

// 	/*	
// 	*/

// }
function resetValues(){
	

}
function printWndo(){
	window.print()
}
