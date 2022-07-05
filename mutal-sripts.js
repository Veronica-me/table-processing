function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time()
{
    var current_datetime = new Date();
    
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    var seconds = zero_first_format(current_datetime.getSeconds());
    return day+"/"+month+"/"+year+" "+hours+":"+minutes+":"+seconds;
}
    
    var actualDate = document.querySelector(".actual-date");
    setInterval(function () {
        actualDate.innerHTML = date_time();
    }, 1000);

    function setColors () {
        setTimeout(function() {
        var percentItems = document.querySelectorAll('.percent');
        percentItems.forEach (item => {
            var percentValue = item.innerHTML;
            
            if (percentValue == 100) {
                $(item.closest('tr')).addClass("green"); 
            } else if (percentValue >= 80) {
                $(item.closest('tr')).addClass("light-green");
            }
            
        }
        )
    }, 10)
}
