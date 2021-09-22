const setHeaderDate = moment().format("MMM Do YY");
$("#currentDay").text(setHeaderDate);

var now = Number(moment().format("HH"));
const text9AM = $("#text9am");
const text10AM = $("#text10am");
const text11AM = $("#text11am");
const text12PM = $("#text12pm");
const text1PM = $("#text1pm");
const text2PM = $("#text2pm");
const text3PM = $("#text3pm");
const text4PM = $("#text4pm");
const text5PM = $("#text5pm");

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

$("button").on("click", function () {
  //setting items in the local storage
  //takes string only//use JSON.stringify to convert to string
  window.localStorage.setItem("9", text9AM.val());
  window.localStorage.setItem("10", text10AM.val());
  window.localStorage.setItem("11", text11AM.val());
  window.localStorage.setItem("12", text12AM.val());
  window.localStorage.setItem("01", text1PM.val());
  window.localStorage.setItem("02", text2PM.val());
  window.localStorage.setItem("03", text3PM.val());
  window.localStorage.setItem("04", text4PM.val());
  window.localStorage.setItem("05", text5PM.val());
});

$("#text9am").append(localStorage.getItem("9"));
$("#text10am").append(localStorage.getItem("10"));
$("#text11am").append(localStorage.getItem("11"));
$("#text12pm").append(localStorage.getItem("12"));
$("#text1pm").append(localStorage.getItem("01"));
$("#text2pm").append(localStorage.getItem("02"));
$("#text3pm").append(localStorage.getItem("03"));
$("#text4pm").append(localStorage.getItem("04"));
$("#text5pm").append(localStorage.getItem("05"));
