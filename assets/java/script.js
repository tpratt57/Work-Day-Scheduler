//function to display the current date and time 
var todaysDate = moment().format("MMMM Do, YYYY - hh:mm:ss a");
$("#currentDay").html(todaysDate);

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
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //check time and add classes for background
            if (blockTime < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockTime === currentTime) {
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
    //retrieve and display item/s from local storage (if applicable)
    $("#8AM-Hour".description).val(localStorage.getItem("#8AM-Hour"));
    $("#9AM-Hour".description).val(localStorage.getItem("#9AM-Hour"));
    $("#10AM-Hour".description).val(localStorage.getItem("#10AM-Hour"));
    $("#11AM-Hour".description).val(localStorage.getItem("#11AM-Hour"));
    $("#12PM-Hour".description).val(localStorage.getItem("#12PM-Hour"));
    $("#1PM-Hour".description).val(localStorage.getItem("#1PM-Hour"));
    $("#2PM-Hour".description).val(localStorage.getItem("#2PM-Hour"));
    $("#3PM-Hour".description).val(localStorage.getItem("#3PM-Hour"));
    $("#4PM-Hour".description).val(localStorage.getItem("#4PM-Hour"));
    $("#5PM-Hour".description).val(localStorage.getItem("#5PM-Hour"));

    console.log(getCurrentTime);
    getCurrentTime();
});


