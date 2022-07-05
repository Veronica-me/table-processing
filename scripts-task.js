
/*alt*/

var requestURL = 'assets/data-tasks.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var taskData = request.response;
    
    $(document).ready(function () {
        $('#table-tasks').bootstrapTable({
            data: taskData
        });
        var taskDataEnd = document.querySelectorAll('tr td.data-end');
        var todayDate = new Date();
        taskDataEnd.forEach (item => {
            var dateTaskEnd = new Date(item.innerHTML);   
            console.log("сейчас: " + todayDate);  
            console.log("финал задания: " + dateTaskEnd);
            if (dateTaskEnd < todayDate) {
                $(item).addClass("red");
                
            }
            }
            );
    }
    );

    
    setColors();  
    
    
}



