$(function () {
  //click event function to store text description into application storage
  //also sets up notification and timer for its display
  $(".saveBtn").on("click", function () {
    //parent (div) of (button)'s hour ID
    let hourly = $(this).parent().attr("id");
    let textDescript = $(this).parent().children(".description").val();

    localStorage.setItem(hourly, textDescript);

    $("#notify").addClass("display");

    setTimeout(function () {
      $("#notify").removeClass("display");
    }, 2000);
  });

  //function to update the past/present/future based on time chosen vs current time
  function hourUpdateAndInterval() {
    var hour = dayjs().hour();

    //function for each time block
    $(".time-block").each(function () {
      var time = parseInt($(this).attr("id").split("-")[1]);

      if (time < hour) {
        $(this).addClass("past");
      } else if (time === hour) {
        $(this).addClass("present");
      } else if (time > hour) {
        $(this).addClass("future");
      }
    });
  }

  //runs function
  hourUpdateAndInterval();

  //interval
  setInterval(hourUpdateAndInterval, 10000);

  //grabbing the input from local storage
  //referenced this part; everything else is made from scratch
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  //to display current time and date on the header
  $("#currentDay").text(dayjs().format("dddd, MMMM, D, YYYY"));
});
