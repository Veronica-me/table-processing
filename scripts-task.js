
/*alt*/

var requestURL = 'assets/data-tasks.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var taskData = request.response;
    console.log (taskData);
    if (taskData){
        $(document).ready(function () {
            $('#table-tasks').bootstrapTable({
                data: taskData
            });
            var taskDataEnd = document.querySelectorAll('tr td.data-end');
            var todayDate = new Date();
            taskDataEnd.forEach (item => {
                var dateTaskEnd = new Date(item.innerHTML);   
                if (dateTaskEnd < todayDate) {
                    $(item).addClass("red");   
                }
            }
            );
        }
        );
    } else {
        document.querySelector(".error").innerHTML = "Brak danych!";
    }
    setColors();  
    
    
}



