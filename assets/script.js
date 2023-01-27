// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  let currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);
  let main = $("#main")
  let hour = dayjs().get('hour')

  let workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

  function workDayScheduler(){
    for(let i = 0; i < workHours.length; i++){
      console.log(hour)
      let saveinput = localStorage.getItem(`${i}`)
      

      let divHours = $("<div class='row time-block' >")
      
      divHours.attr('id', `hours-${i}`)
      let divCol = $("<div class='col-2 col-md-1 hour text-center py-3'>")
      divCol.text(workHours[i])
      
      let textArea = $("<textarea class='col-8 col-md-10 description' rows='3'>")
      textArea.attr('id', `textArea-${i}`)
      if (saveinput){
        textArea.val(saveinput)
      }
      let buttton = $("<button id = 'ESTER' class='btn saveBtn col-2 col-md-1' aria-label='save'>").on('click', function(event){
      var textcontent = $(event.target).siblings(".description").val()
      localStorage.setItem(`${i}`, `${textcontent}`)
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



}); 