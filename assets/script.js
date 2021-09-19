$(document).ready(function () {
  const setHeaderDate = moment().format("MMM Do YY");
  $("#currentDay").text(setHeaderDate);

  var now = Number(moment().format("HH"));

  $("textarea").each(function () {
    var name = Number($(this).attr("name"));
    if (name > now) {
      $(this).addClass("future");
    } else if (name < now) {
      $(this).addClass("past");
    } else {
      $(this).addClass("present");
    }
  });
});
