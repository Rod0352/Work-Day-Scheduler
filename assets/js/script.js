// use moment to get date and then adisplay in "p"
var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

// function to save input in description in local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {

        var textInput = $(this).siblings(".discription").val();
        var time = $(this).parent().attr("id");
        // save in local storage
        localStorage.setItem(textInput, time);
    })
});

// function to track time

function trackTime() {
    var nowTime = moment().hour();
    $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
        console.log(hourBlock, nowTime);

        if (hourBlock < nowTime) {
            $(this).addClass("past");
            $(this).addClass("future");
            $(this).removeClass("present");
        }
        else if (hourBlock === nowTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));

}
trackTime();