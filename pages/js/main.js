var lineChartData = {
			labels : ["1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "#000",
					pointColor : "#00be59",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [88.5,77,90,90.8,101,106,112,113,117,120,123,125,130,140,116,116.5,118,121,130,130,160,156,158.8,163,180,195,200,214,217,220]
				},
				{
					
				}
			]

		}
var lineChartData1 = {
			labels : ["1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "#000",
					pointColor : "#654b9e",
					pointStrokeColor : "#000",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [26,23,26.6,25,29,31,33,32,31.8,34,35,34.5,36,33,32,38.4,38,39,41.4,45,47,46,47.8,54,58,55,56,56,57,57.5]
				},
				{
					
				}
			]

		}
		
var doughnutData = [
				{
					value: 48,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Female"
				},
				{
					value: 52,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Male"
				}

			];
var doughnutData1 = [
				{
					value: 42,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Female"
				},
				{
					value: 58,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Male"
				}

			];
			
var pieData = [
				{
					value: 93.7,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Institutional"
				},
				{
					value: 1.8,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Domiciliary"
				},
				{
					value: 1.2,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Physician/Nurse"
				},
				{
					value: 2.1,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Un-Trained MidWife"
				},
				{
					value: 0.5,
					color: "#4D5360",
					highlight: "#616774",
					label: "Others"
				},
				{
					value: 0.7,
					color: "#654b9e",
					highlight: "#616774",
					label: "Not Available"
				}

			];
var pieData1 = [
				{
					value: 42.4,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Institutional"
				},
				{
					value: 10.1,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Medical Practioner"
				},
				{
					value: 8.6,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Physician/Nurse"
				},
				{
					value: 10.1,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "No Medical Attention"
				},
				{
					value: 26.3,
					color: "#4D5360",
					highlight: "#616774",
					label: "Others"
				},
				{
					value: 2.4,
					color: "#654b9e",
					highlight: "#616774",
					label: "Not Available"
				}

			];

var barChartData = {
		labels : ["Assam","Bihar","Gujrat","Haryana","Kerala","MP","UP","WB"],
		datasets : [
			{
				fillColor : "#00be59",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [8,28,11,4,3,20,60,16]
			},
			{
				fillColor : "#ff5432",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data : [6,15,10,4,5,19,31,15]
			}
		]

	}		

var barChartData1 = {
		labels : ["Assam","Bihar","Gujrat","Haryana","Kerala","MP","UP","WB"],
		datasets : [
			{
				fillColor : "#ff5432",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [3,6.5,4,2,3,7,16,6]
			},
			{
				fillColor : "#00be59",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data : [1.5,2,3,1.5,3,4,8,4]
			}
		]

	}				
			
	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
		
		var ctx1 = document.getElementById("canvas1").getContext("2d");
		window.myLine = new Chart(ctx1).Line(lineChartData1, {
			responsive: true
		});
		
		var ctx2 = document.getElementById("canvas2").getContext("2d");
		window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData, {responsive : true});
		
		var ctx3 = document.getElementById("canvas3").getContext("2d");
		window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData1, {responsive : true});
	
		var ctx4 = document.getElementById("canvas4").getContext("2d");
		window.myPie = new Chart(ctx4).Pie(pieData);
		
		var ctx5 = document.getElementById("canvas5").getContext("2d");
		window.myPie = new Chart(ctx5).Pie(pieData1);
		
		var ctx6 = document.getElementById("canvas6").getContext("2d");
		window.myBar = new Chart(ctx6).Bar(barChartData, {
			responsive : true
		});
		
		var ctx7 = document.getElementById("canvas7").getContext("2d");
		window.myBar = new Chart(ctx7).Bar(barChartData1, {
			responsive : true
		});
	}


