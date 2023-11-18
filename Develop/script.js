//create var for button element
var savebtnEl = $('.saveBtn')
var today = dayjs();

$(function () {
  //var to hold current hour from dayJS and cast as Number for comparison
  var thisHour = Number(today.hour());
  //logic to compare 9-12 and change class
  for(let i=9;i<=12;i++){
      if(i===thisHour)
      {
        if($("#hour-"+i).hasClass("past")){$("#hour-"+i).removeClass("past");}
        if($("#hour-"+i).hasClass("future")){$("#hour-"+i).removeClass("future");}
        if($("#hour-"+i).hasClass("present")){;}else{$("#hour-"+i).addClass("present");}
      }
      else if(i<thisHour)
      {
        if($("#hour-"+i).hasClass("past")){;}else{$("#hour-"+i).addClass("past");}
        if($("#hour-"+i).hasClass("future")){$("#hour-"+i).removeClass("future");}
        if($("#hour-"+i).hasClass("present")){$("#hour-"+i).removeClass("present");}
      }
      else if(i>thisHour)
      {
        if($("#hour-"+i).hasClass("past")){$("#hour-"+i).removeClass("past");}
        if($("#hour-"+i).hasClass("future")){;}else{$("#hour-"+i).addClass("future");}
        if($("#hour-"+i).hasClass("present")){$("#hour-"+i).removeClass("present");}
      }
  }
  //logic to compare 1-5 and change class with additional logic to handle 24 hr format
  for(let i=1;i<=5;i++){
    var thisHour12 = thisHour;
    //if past noon then correct comparison with 12hr format by subtracting 12 takes place
    if(thisHour>12){thisHour12-=12}
    if(i===thisHour12)
      {
        if($("#hour-"+i).hasClass("past")){$("#hour-"+i).removeClass("past");}
        if($("#hour-"+i).hasClass("future")){$("#hour-"+i).removeClass("future");}
        if($("#hour-"+i).hasClass("present")){;}else{$("#hour-"+i).addClass("present");}
      }
      else if(i<thisHour12)
      {
        if($("#hour-"+i).hasClass("past")){;}else{$("#hour-"+i).addClass("past");}
        if($("#hour-"+i).hasClass("future")){$("#hour-"+i).removeClass("future");}
        if($("#hour-"+i).hasClass("present")){$("#hour-"+i).removeClass("present");}
      }
      else if(i>thisHour12)
      {
        if($("#hour-"+i).hasClass("past")){$("#hour-"+i).removeClass("past");}
        if($("#hour-"+i).hasClass("future")){;}else{$("#hour-"+i).addClass("future");}
        if($("#hour-"+i).hasClass("present")){$("#hour-"+i).removeClass("present");}
      }

  }

  //render 9-12 stored data
  for(let i = 9;i<=12;i++){
    //create string var for holding key to hourID
    var currentHourID = "hour-"+i;
    //access text from local storage
    var storedEntry = localStorage.getItem(currentHourID);
    //render text stored
    $("#"+currentHourID).children("textarea").val(storedEntry);
  }
  //render 1-5 stored data
  for(let i = 1;i<=5;i++){
    //create string var for holding key to hourID
    var currentHourID = "hour-"+i;
    //access text from local storage
    var storedEntry = localStorage.getItem(currentHourID);
    //render text stored
    $("#"+currentHourID).children("textarea").val(storedEntry);
  }

  //sets current date for the month in header
  $("#currentDay").text(today.format('DD/MM/YYYY'));

  //event listener for saving button that will save entry
  savebtnEl.on('click',function(event){
      //prevent page reload
      event.preventDefault();
      //obtain hourID of button
      var hourId = $(this).parent().attr("id");
      //obtain text entry of button
      var entry = $(this).siblings("textarea").val();
      //store entry using hourID as key
      localStorage.setItem(hourId,entry);     
      
      
  });
  // TODO: Add code to display the current date in the header of the page.
});
