// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  let currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);
  let main = $("#main")
  // let localStorage = localStorage.getItem()
  let hour = dayjs().get('hour')

  let workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

  function workDayScheduler(){
    for(let i = 0; i < workHours.length; i++){
      console.log(hour)



      let divHours = $("<div class='row time-block' >")
      
      divHours.attr('id', `hours-${i}`)
      let divCol = $("<div class='col-2 col-md-1 hour text-center py-3'>")
      divCol.text(workHours[i])
      
      let textArea = $("<textarea class='col-8 col-md-10 description' rows='3'>")
      textArea.attr('id', `textArea-${i}`)

      let buttton = $("<button id = 'ESTER' class='btn saveBtn col-2 col-md-1' aria-label='save'>").on('click', function(event){
        console.log($(event.target).siblings(".description").val())
      })
      if(workHours[i] === hour){
        textArea.addClass("present")
        console.log('present')
      }
      else if(workHours[i] < hour){
        textArea.addClass("past")
        console.log('past')
      }
      else{
        textArea.addClass("future")
        console.log('future')
      }
      let icon = $("<i class='fas fa-save' aria-hidden='true'></i>")
      buttton.append(icon)
      
      


      divHours.append(divCol,textArea, buttton)
      main.append(divHours)


    }

  }
  workDayScheduler()

function saveData (){
  let value = $(this).siblings('.description').val()
  console.log($(value))
}





 

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?





  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // let currentHour = currentDate.hour();
  // $('.time-block').each(function();
  //If Else Statement....??
  



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // let event = localStorage.getItem(hour);

  //
  // TODO: Add code to display the current date in the header of the page.
});



 