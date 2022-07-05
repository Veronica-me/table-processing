
/*alt*/

var requestURL = 'assets/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var taskData = request.response;
    
    $(document).ready(function () {
        $('#table').bootstrapTable({
            data: taskData
        });
        var sortButton = document.querySelector('.sort');
        sortButton.addEventListener('click', setColors);

        
        setColors();  

    }
    );
    
}


   
