$(document).ready(function () {
  const setHeaderDate = moment().format("MMM Do YY");
  $("#currentDay").text(setHeaderDate);
});

const now = moment().format("LTS");
