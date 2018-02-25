	var groc=0;
	var ente=0;
	var food=0;
	var vehi=0;
	var misc=0;
	var total=0;
	function move() {
  var cat=document.getElementById("cat");
  var elemid=cat.options[cat.selectedIndex].value;
  var elem = document.getElementById(elemid);   
  var tot= document.getElementById("eye").value;
		if(elemid=='gBar'){
			groc+=parseInt(tot);
			document.getElementById("gtot").innerHTML=groc;
		if(groc>10000){
			elem.style.width=100+'%';
			document.getElementById("warn").innerHTML='Warning!You might be broke!Spent too much on Grocery!';}
		else{elem.style.width=(groc/100)+'%';}
		}
		else if(elemid=='eBar'){
			ente+=parseInt(tot);
			document.getElementById("etot").innerHTML=ente;
		if(ente>10000){
			elem.style.width=100+'%';
			document.getElementById("warn").innerHTML='Warning!You might be broke!Spent too much on Entertainment!';}
		else{elem.style.width=(ente/100)+'%';}
		} 
		else if(elemid=='vBar'){
			vehi+=parseInt(tot);
			document.getElementById("vtot").innerHTML=vehi;
		if(vehi>10000){
			elem.style.width=100+'%';
			document.getElementById("warn").innerHTML='Warning!You might be broke!Spent too much on Vehicle!';}
		else{elem.style.width=(vehi/100)+'%';}
		}
		else if(elemid=='fBar'){
			food+=parseInt(tot);
			document.getElementById("ftot").innerHTML=food;
		if(food>10000){
			elem.style.width=100+'%';
			document.getElementById("warn").innerHTML='Warning!You might be broke!Spent too much on Food,But thats okay!';}
		else{elem.style.width=(food/100)+'%';}
		}
		else if(elemid=='mBar'){
			misc+=parseInt(tot);
			document.getElementById("mtot").innerHTML=misc;
		if(misc>10000){
			elem.style.width=100+'%';
			document.getElementById("warn").innerHTML='Warning!You might be broke!Spent too much on Miscellaneous!' ;}
		else{elem.style.width=(misc/100)+'%';}
		}
 total=groc+ente+vehi+food+misc;
document.getElementById("tc").innerHTML='Rs.'+total;
if(total>50000){
	document.getElementById("warn").innerHTML='You\'ll surely be Broke!';
}
}// JavaScript Document