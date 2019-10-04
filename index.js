
var activityCounter=0;
var loginHoursCounter=0;

function setup() {

 noCanvas();
 
 var duration = document.getElementById("duration");
 var startBtnActivity = document.getElementById("timer-start");
 var endBtnActivity = document.getElementById("timer-end");
 var startBtnOffice = document.getElementById("office-timer-start");
 var endBtnOffice = document.getElementById("office-timer-end");
 var productionHours=0;
 var breakHours=0;
 var auxHours=0;
 var currentAct = document.getElementsByName("Acts");
 var currentCount;
  
 var activityIntervalId;
 var officeIntervalId; 
 
 
  //on button click show the current Time in Office as login time
  
  startBtnOffice.addEventListener("click",function () {
   var d = new Date();
   var t = d.toLocaleTimeString();
   document.getElementById("loginTime").innerHTML = t;
    });
  
// // on button click start the counter for Time in Office as login hours

startBtnOffice.addEventListener("click", function () {
   officeIntervalId= setInterval(function (){
        loginHoursCounter ++;
        document.getElementById("loginHours").innerHTML = hourCalculator(loginHoursCounter);
    },1000);
});

endBtnOffice.addEventListener("click",function(){
    clearInterval(officeIntervalId);
});
  
  //on button click start counter for Activities
  
    startBtnActivity.addEventListener("click",function () {
      if (currentAct[0].checked || currentAct[1].checked || currentAct[2].checked) {
        if (activityCounter==="00:00:00" || activityCounter === 0){
          activityIntervalId = setInterval(function() {
            activityCounter ++;
            duration.innerHTML=hourCalculator(activityCounter);
         },1000);
        } else {
          alert ("Please reset the activity duration by pressing Reset button");
        }
        
      }
      else {
        alert("Please select an Activity i.e. Production or Break or Auxiliary");
      }  
   });
 

// on button click end counter for Activities

 endBtnActivity.addEventListener("click",function(){
   clearInterval(activityIntervalId);

   //if the button is production then add in production, if in break add in break else add in aux

   if (currentAct[0].checked){
    productionHours= productionHours+activityCounter;
    document.querySelector("#productionHours").innerHTML= hourCalculator(productionHours);
   }
   else if (currentAct[1].checked){
    breakHours= breakHours+activityCounter;
    document.querySelector("#breakHours").innerHTML=hourCalculator(breakHours);
   } 
   
   else if (currentAct[2].checked) {
    auxHours= auxHours+activityCounter;
    document.querySelector("#auxHours").innerHTML=hourCalculator(auxHours);
   } else 
   {
     alert("Please select an Activity i.e. Production or Break or Auxiliary");
   }
   
 });

 //Reset the Activity Counter when clicked on Reset button 

 var reset = document.querySelector(".Reset");
 reset.addEventListener("click", function (){
   var resetCount= 0;
   duration.innerHTML=resetCount;
   activityCounter=0;
 });


//Convert seconds to Minutes & hours

function hourCalculator (s) {
  var hours = Math.floor (s/3600);
  var mins = Math.floor ((s%3600)/60);
  var secs = Math.floor (s%60);
  currentCount = nf(hours,2) + ":" + nf(mins,2) + ":" + nf(secs,2);

  return currentCount;
}


}




