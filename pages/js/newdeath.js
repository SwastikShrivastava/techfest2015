var tr=1;
function next(){
	if(tr==1){
	document.getElementById('form1').style.display= 'none' ;
	document.getElementById('form2').style.display= 'block' ;
	document.getElementById('prev').style.display= 'block' ;
	document.getElementById('nex').innerHTML = "SUBMIT" ;
	document.getElementById('nex1').className = "fa fa-save fa-stack-1x fa-cusp" ;
	tr=tr+1;
	}
	else{
		var a=document.getElementById('input-1').value;
		localStorage.setItem("dd",a );
		var b=document.getElementById('input-2').value;
		localStorage.setItem("pn",b );
		var c=document.getElementById('input-3').value;
		var d=document.getElementById('input-4').value;
		var e=document.getElementById('input-5').value;
		var f=document.getElementById('input-6').value;
		localStorage.setItem("ppn",f );
		var g=document.getElementById('input-7').value;
		localStorage.setItem("pcn",g );
		var h=document.getElementById('input-8').value;
		var i=document.getElementById('input-9').value;
		localStorage.setItem("dis",i );
		var j=document.getElementById('input-10').value;
		var k=document.getElementById('input-11').value;
		localStorage.setItem("rel",k );
		var l=document.getElementById('input-12').value;
		localStorage.setItem("deathstate",l );
		localStorage.setItem("rep1",35680007845 );
		
		if(a=='' || b=='' || c=='' || d=='' || e=='' || f=='' || g=='' || h=='' || i=='' || j=='' || k=='' || l=='')
		{
			sweetAlert("Oops...", "You have not filled all the fields! Try again", "error");
		}
		else{
			swal({   title: "Request Has Been Sent To " + l,   text: "You will get the certificate within 3 working days. Get a reciept/service number to download the certificate.",   type: "success",   showCancelButton: false,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Get Receipt!",   closeOnConfirm: false }, 
			function(){ 
				window.location.assign("./file/deathreciept.html");
			});
		}
	}
}

function prev(){
	document.getElementById('form1').style.display= 'block' ;
	document.getElementById('form2').style.display= 'none' ;
	document.getElementById('prev').style.display= 'none' ;
	document.getElementById('nex').innerHTML = "NEXT" ;
	document.getElementById('nex1').className = "fa fa-chevron-right fa-stack-1x fa-cusp" ;
	tr=1;
}