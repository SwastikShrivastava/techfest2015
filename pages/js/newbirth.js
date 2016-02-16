var tr=1;
function next(){
	if(tr==1){
	document.getElementById('form1').style.display= 'none' ;
	document.getElementById('form2').style.display= 'block' ;
	document.getElementById('prev').style.display= 'block' ;
	tr=tr+1;
	}
	else if(tr==2){
		document.getElementById('form2').style.display= 'none' ;
		document.getElementById('form3').style.display= 'block' ;
		document.getElementById('nex').innerHTML = "SUBMIT" ;
		document.getElementById('nex1').className = "fa fa-save fa-stack-1x fa-cusp" ;
	tr=tr+1;
		
	}
	else{
		var a=document.getElementById('input-1').value;
		localStorage.setItem("bd",a );
		var b=document.getElementById('input-2').value;
		localStorage.setItem("cn",b );
		var c=document.getElementById('input-3').value;
		var d=document.getElementById('input-4').value;
		var e=document.getElementById('input-5').value;
		var f=document.getElementById('input-6').value;
		localStorage.setItem("fn",f );
		var g=document.getElementById('input-7').value;
		localStorage.setItem("mn",g );
		var h=document.getElementById('input-8').value;
		var i=document.getElementById('input-9').value;
		localStorage.setItem("d",i );
		var j=document.getElementById('input-10').value;
		var k=document.getElementById('input-11').value;
		localStorage.setItem("r",k );
		var l=document.getElementById('input-12').value;
		var m=document.getElementById('input-13').value;
		var n=document.getElementById('input-14').value;
		var o=document.getElementById('input-15').value;
		var p=document.getElementById('input-16').value;
		var q=document.getElementById('input-17').value;
		var r=document.getElementById('input-18').value;
		localStorage.setItem("mai",r );
		var s=document.getElementById('input-19').value;
		localStorage.setItem("st",s );
		localStorage.setItem("rep",19090078000 );
		
		if(a=='' || b=='' || c=='' || d=='' || e=='' || f=='' || g=='' || h=='' || i=='' || j=='' || k=='' || l=='' || m=='' || n=='' || o=='' || p=='' || q=='' || r=='')
		{
			sweetAlert("Oops...", "You have not filled all the fields! Try again", "error");
		}
		else{
			swal({   title: "Request Has Been Sent To " + s,   text: "You will get the certificate within 3 working days. Get a reciept/service number to download the certificate.",   type: "success",   showCancelButton: false,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Get Receipt!",   closeOnConfirm: false }, 
			function(){ 
				window.location.assign("./file/birthreciept.html");
			});
		}
	}
}

function prev(){
	document.getElementById('form1').style.display= 'block' ;
	document.getElementById('form2').style.display= 'none' ;
	document.getElementById('form3').style.display= 'none' ;
	document.getElementById('prev').style.display= 'none' ;
	document.getElementById('nex').innerHTML = "NEXT" ;
	document.getElementById('nex1').className = "fa fa-chevron-right fa-stack-1x fa-cusp" ;
	tr=1;
}