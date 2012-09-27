function calendar(inp_month,inp_year){
    var padding ="";
    var totalFeb ="";
    var i = 1;
    var testing="";
    
    var current = new Date();
    var month = inp_month-1;
    var day = current.getDate();
    var year = inp_year;
    var tempMonth = month+1; 
    var prevMonth = month -1;
    
    if (month == 1){
	if ( (year%100!=0) && (year%4==0) || (year%400==0)){
	    totalFeb = 29;
	}else{
	    totalFeb = 28;
	}
    }
    var monthNames = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov", "Dec"];
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
    var totalDays = ["31", ""+totalFeb+"","31","30","31","30","31","31","30","31","30","31"]
    
    var tempDate = new Date(tempMonth +' 1 ,'+year);
    var tempweekday= tempDate.getDay();
    var tempweekday2 = tempweekday
    var dayAmount = totalDays[month];
    // var preAmount = totalDays[prevMonth] - tempweekday + 1;	

    while (tempweekday>0){
	padding += "<td class='premonth'></td>";
	//preAmount++;
 	tempweekday--;
    }

    while (i <= dayAmount){
	if (tempweekday2 > 6){
	    tempweekday2 = 0;
	    padding += "</tr><tr>";
	}
	if (i == day){
	    padding +="<td class='currentday'  onMouseOver='this.style.background=\"#00FF00\"; this.style.color=\"#FFFFFF\"' onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>"+i+"</td>";
	}
	else{
	    padding +="<td class='currentmonth' onMouseOver='this.style.background=\"#00FF00\"' onMouseOut='this.style.background=\"#FFFFFF\"'>"+i+"</td>";		}
	
	tempweekday2++;
	i++;
    }
    var calendarTable = "<table class='calendar'> <tr class='currentmonth'><th colspan='7'>"+monthNames[month]+" "+ year +"</th></tr>";
    calendarTable +="<tr class='weekdays'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td> <td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
    calendarTable += "<tr>";
    calendarTable += padding;
    calendarTable += "</tr></table>";
    document.getElementById("calendar").innerHTML=calendarTable;
}