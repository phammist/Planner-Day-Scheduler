$(function () {

//The current date.
  $('#currentDay').text(dayjs().format('MMMM DD, YYYY'));




//Save button to store the values
  $('.saveBtn').on('click', function () {
      
      //This is the value for the description text.
    var descript = $(this).siblings('.description').val();
      //This is the value of the hour by id.
    var block = $(this).parent().attr('id');

      //Create new value into localstorage (Look at application in console).
    localStorage.setItem(block, descript);

    //Pop up for the alert 
     $('.alert').addClass('show');

    setTimeout(function () {
      $('.alert').removeClass('show');
    }, 3000);
  });




//function for time refresh
  setInterval(timeHourUpdater, 5000)




//Time Logistics
  function timeHourUpdater() {
      //Current Time Displayer
    var timeNow = dayjs().hour();

      //Labeling the time block status
    $('.time-block').each(function () {
      
        //The loop
      var timeList = parseInt($(this).attr('id').split('-')[1]);
      if (timeList === timeNow) {
        $(this).addClass('present');
      } else if (timeList > timeNow) {
        $(this).removeClass('present');
        $(this).addClass('future');
      } else {
        $(this).removeClass('future');
        $(this).addClass('past'); }
    });
  }

//Run the function
  timeHourUpdater();


//Tedious input value storages that makes it keep displaying on description
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  $('#hour-19 .description').val(localStorage.getItem('hour-19'));  
});
