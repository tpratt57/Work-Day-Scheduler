//function to display the current date and time 
var todaysDate = moment().format("MMMM Do, YYYY - hh:mm:ss a");
$("#currentDay").html(todaysDate);

//function to track local time so css can display past, present, and future


//function to save button click, save text in local storage & get values of description in JQuery

$(document).ready(function () {
    //"click" listener for saveBtn
    $(".saveBtn").on("click", function () {
        //get values of description from JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save text to local storage
        localStorage.setItem(time, text);
    })

    function getCurrentTime() {
    //get current hour time
    var currentTime = moment().hour();

    //loop through time blocks
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        //check time and add classes for background
        if (timeBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
getCurrentTime();
});


